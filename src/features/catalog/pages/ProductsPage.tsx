import { useEffect, useMemo, useRef, useState } from 'react'
import { MapPin, Search, SlidersHorizontal } from 'lucide-react'
import { products, productCategories, productHubs } from '../data/products'
import type { Product } from '../types/product'
import { ProductCard } from '../components/ProductCard'
import { ProductDetails } from '../components/ProductDetails'
import { useCartStore } from '../../cart/store/cartStore'
import { getAvailableStock } from '../../cart/utils/inventory'
import { playCartBell } from '../../cart/utils/playCartBell'
import './products.css'

type SortOrder = 'featured' | 'price-low' | 'price-high' | 'rating'

export function ProductsPage() {
  const [search, setSearch] = useState('')
  const [hub, setHub] = useState('all')
  const [category, setCategory] = useState('all')
  const [inStockOnly, setInStockOnly] = useState(false)
  const [sortOrder, setSortOrder] = useState<SortOrder>('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)
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

  return (
    <div className="catalog-page">
      <header className="catalog-heading">
        <p className="eyebrow">From Tanzania, with care</p>
        <h1>Products from our regional hubs</h1>
        <p>Discover locally processed foods and goods from across Tanzania.</p>
      </header>

      <section className="catalog-toolbar" aria-label="Search and filter products">
        <label className="catalog-search">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">Search products</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search oils, rice, sembe, cashews..."
          />
        </label>

        <label className="catalog-select catalog-hub-select">
          <MapPin size={16} aria-hidden="true" />
          <span className="sr-only">Filter by regional hub</span>
          <select value={hub} onChange={(event) => setHub(event.target.value)}>
            <option value="all">All Regional Hubs</option>
            {productHubs.map((productHub) => (
              <option key={productHub} value={productHub}>{productHub}</option>
            ))}
          </select>
        </label>

        <div className="catalog-filter-wrap">
          <button
            className={`catalog-filter-button${filtersOpen ? ' is-active' : ''}`}
            type="button"
            aria-expanded={filtersOpen}
            aria-controls="catalog-filters"
            onClick={() => setFiltersOpen((open) => !open)}
          >
            <SlidersHorizontal size={17} aria-hidden="true" />
            <span className="sr-only">Filters</span>
          </button>
          {filtersOpen && (
            <div className="catalog-filter-panel" id="catalog-filters">
              <fieldset>
                <legend>Category</legend>
                <label>
                  <input
                    type="radio"
                    name="product-category"
                    checked={category === 'all'}
                    onChange={() => setCategory('all')}
                  />
                  All products
                </label>
                {productCategories.map((productCategory) => (
                  <label key={productCategory}>
                    <input
                      type="radio"
                      name="product-category"
                      checked={category === productCategory}
                      onChange={() => setCategory(productCategory)}
                    />
                    {productCategory}
                  </label>
                ))}
              </fieldset>
              <label className="catalog-stock-filter">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(event) => setInStockOnly(event.target.checked)}
                />
                In stock only
              </label>
              <button className="catalog-reset-button" type="button" onClick={resetFilters}>
                Clear filters
              </button>
            </div>
          )}
        </div>

        <label className="catalog-select catalog-sort-select">
          <span className="sr-only">Sort products</span>
          <span aria-hidden="true">Sort:</span>
          <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value as SortOrder)}>
            <option value="featured">Featured Top</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </label>
      </section>

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
