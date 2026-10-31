import { Link } from 'react-router-dom'
export function PaymentPage() { return <section className="checkout-page"><p className="eyebrow">Step 2 of 3</p><h1>Payment</h1><p>Payment methods will be connected in a later implementation.</p><ul><li>Mobile payment</li><li>Card payment</li><li>Till payment</li></ul><Link className="button" to="/checkout/confirmation">Continue</Link></section> }
