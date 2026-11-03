import { Factory, MapPin, PackageCheck, ShieldCheck, ShoppingBag, Star, Users, X } from 'lucide-react'
import type { Product } from '../types/product'

type ProductDetailsProps = {
  product: Product
  quantity: number
  onQuantityChange: (quantity: number) => void
  onAdd: () => void
  onClose?: () => void
}

const currency = new Intl.NumberFormat('en-TZ', {
  style: 'currency',
  currency: 'TZS',
  maximumFractionDigits: 0,
})

export function ProductDetails({
  product,
  quantity,
  onQuantityChange,
  onAdd,
  onClose,
}: ProductDetailsProps) {
  return (
    <div className="product-detail-layout">
      {onClose && (
        <button className="product-dialog-close" type="button" onClick={onClose} aria-label="Close product details">
          <X size={20} aria-hidden="true" />
        </button>
      )}
      <div className="product-detail-visual">
        <img src={product.image} alt={product.imageAlt} />
        <span className="product-category-badge">{product.category}</span>
        <div className="product-origin-note">
          <Factory size={17} aria-hidden="true" />
          <div>
            <strong>Manufactured at {product.hub}</strong>
            <span>Direct source value addition in {product.origin.split(',')[0]}</span>
          </div>
        </div>
      </div>

      <div className="product-detail-information">
        <p className="product-detail-location">
          <MapPin size={15} aria-hidden="true" />
          {product.origin}
          <span className="product-detail-rating">
            <Star size={14} fill="currentColor" aria-hidden="true" />
            {product.rating} ({product.reviewCount} reviews)
          </span>
        </p>
        <h1>{product.name}</h1>
        <div className="product-detail-pricing">
          <strong>{currency.format(product.price)}</strong>
          <del>{currency.format(product.previousPrice)}</del>
        </div>
        <p className="product-detail-description">{product.description}</p>

        <section className="product-traceability" aria-labelledby="product-traceability-heading">
          <h2 id="product-traceability-heading">
            <ShieldCheck size={16} aria-hidden="true" />
            Decentralized Traceability
          </h2>
          <p>
            <Users size={15} aria-hidden="true" />
            <span><strong>Partner Group:</strong> {product.partnerGroup}</span>
          </p>
          <p>
            <Factory size={15} aria-hidden="true" />
            <span><strong>Processing Method:</strong> {product.processingMethod}</span>
          </p>
          <p>
            <MapPin size={15} aria-hidden="true" />
            <span><strong>Product Origin:</strong> {product.origin}</span>
          </p>
        </section>

        <section className="product-highlights" aria-labelledby="product-highlights-heading">
          <h2 id="product-highlights-heading">Quality Highlights</h2>
          <ul>
            {product.highlights.map((highlight) => (
              <li key={highlight}><PackageCheck size={14} aria-hidden="true" />{highlight}</li>
            ))}
          </ul>
        </section>

        <div className="product-detail-purchase">
          <div className="product-quantity-control" aria-label="Select quantity">
            <button
              type="button"
              onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
              aria-label="Decrease quantity"
              disabled={quantity <= 1}
            >
              −
            </button>
            <output aria-live="polite">{quantity}</output>
            <button
              type="button"
              onClick={() => onQuantityChange(Math.min(product.stock, quantity + 1))}
              aria-label="Increase quantity"
              disabled={quantity >= product.stock}
            >
              +
            </button>
          </div>
          <p>Unit: {product.pack}<br /><strong>{product.stock} in stock</strong></p>
        </div>
        <button className="product-add-button product-detail-add" type="button" onClick={onAdd}>
          <span><ShoppingBag size={15} aria-hidden="true" /> Add {quantity} to Cart — {currency.format(product.price * quantity)}</span>
        </button>
      </div>
    </div>
  )
}
