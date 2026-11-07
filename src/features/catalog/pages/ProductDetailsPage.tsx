import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { products } from '../data/products'
import { ProductDetails } from '../components/ProductDetails'
import { useCartStore } from '../../cart/store/cartStore'
import { getAvailableStock } from '../../cart/utils/inventory'
import { playCartBell } from '../../cart/utils/playCartBell'

export function ProductDetailsPage() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)
  const [quantity, setQuantity] = useState(1)
  const [addedMessage, setAddedMessage] = useState('')
  const addItem = useCartStore((state) => state.addItem)
  const cartItems = useCartStore((state) => state.items)

  if (!product) {
    return (
      <section className="catalog-empty-state product-not-found">
        <h1>Product not found</h1>
        <p>This product may have been removed or the link may be incorrect.</p>
        <Link className="button" to="/products">Browse products</Link>
      </section>
    )
  }

  return (
    <div className="product-details-page">
      <Link className="product-back-link" to="/products"><ArrowLeft size={17} /> Back to products</Link>
      <ProductDetails
        product={product}
        availableStock={getAvailableStock(product, cartItems)}
        quantity={quantity}
        onQuantityChange={setQuantity}
        onAdd={() => {
          const addedAmount = addItem(product, quantity)
          if (addedAmount > 0) {
            playCartBell()
            setAddedMessage(`${addedAmount} × ${product.name} added to your cart.`)
          } else {
            setAddedMessage(`No additional stock is available for ${product.name}.`)
          }
        }}
      />
      <p className="catalog-status" role="status" aria-live="polite">
        {addedMessage}
      </p>
    </div>
  )
}
