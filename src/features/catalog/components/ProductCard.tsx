import { Link } from 'react-router-dom'
import { MapPin, ShoppingBag, Star } from 'lucide-react'
import { routePaths } from '../../../routes/routePaths'
import type { Product } from '../types/product'

type ProductCardProps = {
  product: Product
  availableStock: number
  onView: () => void
  onAdd: () => void
}

const currency = new Intl.NumberFormat('en-TZ', {
  style: 'currency',
  currency: 'TZS',
  maximumFractionDigits: 0,
})

export function ProductCard({ product, availableStock, onView, onAdd }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-card-image-wrap">
        <img className="product-card-image" src={product.image} alt={product.imageAlt} />
        <span className="product-category-badge">{product.category}</span>
        <span className="product-feature-badge">{product.badge}</span>
        <button className="product-view-overlay" type="button" onClick={onView}>
          View Origin &amp; Batch Details
        </button>
      </div>

      <div className="product-card-body">
        <p className="product-card-location">
          <MapPin size={13} aria-hidden="true" />
          {product.hub}
        </p>
        <h2 className="product-card-title">
          <Link to={`${routePaths.products}/${product.slug}`}>{product.name}</Link>
        </h2>
        <p className="product-card-description">{product.description}</p>
        <div className="product-card-meta">
          <span>Pack: {product.pack}</span>
          <span>{availableStock} available</span>
        </div>
      </div>

      <div className="product-card-footer">
        <div className="product-card-pricing">
          <div>
            <strong>{currency.format(product.price)}</strong>
            <del>{currency.format(product.previousPrice)}</del>
          </div>
          <span className="product-rating" aria-label={`${product.rating} out of 5 stars`}>
            <Star size={15} fill="currentColor" aria-hidden="true" />
            {product.rating}
          </span>
        </div>
        <button className="product-add-button" type="button" onClick={onAdd} disabled={availableStock === 0}>
          <ShoppingBag size={15} aria-hidden="true" />
          {availableStock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </article>
  )
}
