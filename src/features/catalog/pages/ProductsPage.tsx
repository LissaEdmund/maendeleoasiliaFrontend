import { useEffect, useMemo, useRef, useState } from 'react'
import { MapPin } from 'lucide-react'
import { products, productCategories, productHubs } from '../data/products'
import type { Product } from '../types/product'
import { ProductCard } from '../components/ProductCard'
import { ProductDetails } from '../components/ProductDetails'
import { useCartStore } from '../../cart/store/cartStore'
import { getAvailableStock } from '../../cart/utils/inventory'
import { playCartBell } from '../../cart/utils/playCartBell'
import { FilterBar } from '../../../components/shared/FilterBar/FilterBar'
import './products.css'

type SortOrder = 'featured' | 'price-low' | 'price-high' | 'rating'

export function ProductsPage() {
  const [search, setSearch] = useState('')
  const [hub, setHub] = useState('all')
  const [category, setCategory] = useState('all')
  const [inStockOnly, setInStockOnly] = useState(false)
  const [sortOrder, setSortOrder] = useState<SortOrder>('featured')
  const [activeProduct, setActiveProduct] = useState<Product | null>(null)
  const [addedMessage, setAddedMessage] = useState('')
  const [quantity, setQuantity] = useState(1)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const addItem = useCartStore((state) => state.addItem)
  const cartItems = useCartStore((state) => state.items)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (activeProduct && !dialog.open) dialog.showModal()
    if (!activeProduct && dialog.open) dialog.close()
  }, [activeProduct])

  const visibleProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()
    const filtered = products.filter((product) => {
      const matchesSearch =
        !normalizedSearch ||
        [product.name, product.category, product.description, product.hub, product.origin]
          .some((value) => value.toLowerCase().includes(normalizedSearch))
      const matchesHub = hub === 'all' || product.hub === hub
      const matchesCategory = category === 'all' || product.category === category
      const matchesStock = !inStockOnly || getAvailableStock(product, cartItems) > 0
      return matchesSearch && matchesHub && matchesCategory && matchesStock
    })

    if (sortOrder === 'price-low') return filtered.sort((a, b) => a.price - b.price)
    if (sortOrder === 'price-high') return filtered.sort((a, b) => b.price - a.price)
    if (sortOrder === 'rating') return filtered.sort((a, b) => b.rating - a.rating)
    return filtered
  }, [cartItems, category, hub, inStockOnly, search, sortOrder])

  function addProductToCart(product: Product, amount: number) {
    const addedAmount = addItem(product, amount)
    if (addedAmount === 0) {
      setAddedMessage(`No additional stock is available for ${product.name}.`)
      return 0
    }

    playCartBell()
    setAddedMessage(`${addedAmount} × ${product.name} added to your cart.`)
    return addedAmount
  }

  function resetFilters() {
    setCategory('all')
    setInStockOnly(false)
  }

  function updateSortOrder(value: string) {
    if (value === 'featured' || value === 'price-low' || value === 'price-high' || value === 'rating') {
      setSortOrder(value)
    }
  }

  return (
    <div className="catalog-page">
      <header className="catalog-heading">
        <p className="eyebrow">From Tanzania, with care</p>
        <h1>Products from our regional hubs</h1>
        <p>Discover locally processed foods and goods from across Tanzania.</p>
      </header>

      <FilterBar
        ariaLabel="Search and filter products"
        search={{
          label: 'Search products',
          value: search,
          placeholder: 'Search oils, rice, sembe, cashews...',
          onChange: setSearch,
        }}
        selects={[
          {
            id: 'regional-hub',
            label: 'Filter by regional hub',
            value: hub,
            icon: <MapPin size={16} aria-hidden="true" />,
            options: [
              { label: 'All Regional Hubs', value: 'all' },
              ...productHubs.map((productHub) => ({ label: productHub, value: productHub })),
            ],
            onChange: setHub,
          },
          {
            id: 'product-sort',
            label: 'Sort products',
            value: sortOrder,
            prefix: 'Sort:',
            options: [
              { label: 'Featured Top', value: 'featured' },
              { label: 'Price: Low to High', value: 'price-low' },
              { label: 'Price: High to Low', value: 'price-high' },
              { label: 'Top Rated', value: 'rating' },
            ],
            onChange: updateSortOrder,
          },
        ]}
        choiceGroups={[
          {
            id: 'product-category',
            label: 'Category',
            value: category,
            options: [
              { label: 'All products', value: 'all' },
              ...productCategories.map((productCategory) => ({
                label: productCategory,
                value: productCategory,
              })),
            ],
            onChange: setCategory,
          },
        ]}
        toggles={[
          {
            id: 'in-stock-only',
            label: 'In stock only',
            checked: inStockOnly,
            onChange: setInStockOnly,
          },
        ]}
        onClear={resetFilters}
      />

      <div className="catalog-result-row"> 
        {/* <p>{visibleProducts.length} {visibleProducts.length === 1 ? 'product' : 'products'}</p> */}
      </div>

      {visibleProducts.length > 0 ? (
        <div className="catalog-grid">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              availableStock={getAvailableStock(product, cartItems)}
              onView={() => {
                setQuantity(1)
                setActiveProduct(product)
              }}
              onAdd={() => addProductToCart(product, 1)}
            />
          ))}
        </div>
      ) : (
        <div className="catalog-empty-state">
          <h2>No products found</h2>
          <p>Try another search or clear the selected filters.</p>
          <button type="button" onClick={() => { setSearch(''); setHub('all'); resetFilters() }}>
            Clear search and filters
          </button>
        </div>
      )}

      <p className="catalog-status" role="status" aria-live="polite">{addedMessage}</p>

      <dialog
        ref={dialogRef}
        className="product-dialog"
        aria-label={activeProduct ? `${activeProduct.name} details` : 'Product details'}
        onClose={() => setActiveProduct(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setActiveProduct(null)
        }}
      >
        {activeProduct && (
          <ProductDetails
            product={activeProduct}
            availableStock={getAvailableStock(activeProduct, cartItems)}
            quantity={quantity}
            onQuantityChange={setQuantity}
            onAdd={() => {
              if (addProductToCart(activeProduct, quantity) > 0) setActiveProduct(null)
            }}
            onClose={() => setActiveProduct(null)}
          />
        )}
      </dialog>
    </div>
  )
}
