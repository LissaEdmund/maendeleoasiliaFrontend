import { useNavigate } from 'react-router-dom'
import { B2CDetailsForm } from '../components/b2c/B2CDetailsForm'
import { B2BDetailsForm } from '../components/b2b/B2BDetailsForm'
import { CustomerTypeToggle } from '../components/CustomerTypeToggle'
import { useCheckoutStore } from '../store/checkoutStore'
import type { B2CCustomerDetails } from '../types/checkout'
export function CustomerDetailsPage() {
  const { customerType, setCustomerType, setCustomer } = useCheckoutStore(); const navigate = useNavigate()
  const continueAsB2C = (details: B2CCustomerDetails) => { setCustomer({ type: 'b2c', details }); navigate('/checkout/payment') }
  return <section className="checkout-page"><p className="eyebrow">Step 1 of 3</p><h1>Customer details</h1><CustomerTypeToggle value={customerType} onChange={setCustomerType} />{customerType === 'b2c' ? <B2CDetailsForm onSubmit={continueAsB2C} /> : <B2BDetailsForm />}</section>
}
