import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { products } from '../data/products'
import { ProductDetails } from '../components/ProductDetails'
import { useCartStore } from '../../cart/store/cartStore'

export function ProductDetailsPage() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const addItem = useCartStore((state) => state.addItem)

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
        quantity={quantity}
        onQuantityChange={setQuantity}
        onAdd={() => {
          addItem(product, quantity)
          setAdded(true)
        }}
      />
      <p className="catalog-status" role="status" aria-live="polite">
        {added ? `${quantity} × ${product.name} added to your cart.` : ''}
      </p>
    </div>
  )
}
