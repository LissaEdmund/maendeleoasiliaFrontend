import { Link } from 'react-router-dom'
import { ArrowLeft, Minus, Plus, Trash2 } from 'lucide-react'
import { routePaths } from '../../../routes/routePaths'
import { useCartStore } from '../store/cartStore'

const currency = new Intl.NumberFormat('en-TZ', {
  style: 'currency',
  currency: 'TZS',
  maximumFractionDigits: 0,
})

export function CartPage() {
  const items = useCartStore((state) => state.items)
  const setQuantity = useCartStore((state) => state.setQuantity)
  const removeItem = useCartStore((state) => state.removeItem)
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  return (
    <section className="cart-page">
      <p className="eyebrow">Your selections</p>
      <h1>Shopping Cart</h1>
      {items.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty.</p>
          <Link className="button" to={routePaths.products}>Browse products</Link>
        </div>
      ) : (
        <>
          <div className="cart-lines">
            {items.map(({ product, quantity }) => (
              <article className="cart-line" key={product.slug}>
                <img src={product.image} alt={product.imageAlt} />
                <div className="cart-line-info">
                  <p>{product.category} · {product.pack}</p>
                  <h2>{product.name}</h2>
                  <strong>{currency.format(product.price)}</strong>
                </div>
                <div className="cart-line-actions">
                  <div className="product-quantity-control" aria-label={`Quantity for ${product.name}`}>
                    <button
                      type="button"
                      onClick={() => setQuantity(product.slug, quantity - 1)}
                      disabled={quantity <= 1}
                      aria-label={`Decrease ${product.name} quantity`}
                    >
                      <Minus size={15} />
                    </button>
                    <output>{quantity}</output>
                    <button
                      type="button"
                      onClick={() => setQuantity(product.slug, quantity + 1)}
                      disabled={quantity >= product.stock}
                      aria-label={`Increase ${product.name} quantity`}
                    >
                      <Plus size={15} />
                    </button>
                  </div>
                  <button
                    className="cart-remove-button"
                    type="button"
                    onClick={() => removeItem(product.slug)}
                    aria-label={`Remove ${product.name} from cart`}
                  >
                    <Trash2 size={17} />
                    Remove
                  </button>
                </div>
                <strong className="cart-line-total">{currency.format(product.price * quantity)}</strong>
              </article>
            ))}
          </div>
          <div className="cart-summary">
            <p><span>Subtotal</span><strong>{currency.format(total)}</strong></p>
            <Link className="button" to={routePaths.customerDetails}>Continue to checkout</Link>
          </div>
        </>
      )}
      <Link className="product-back-link cart-continue-link" to={routePaths.products}>
        <ArrowLeft size={17} /> Continue shopping
      </Link>
    </section>
  )
}
