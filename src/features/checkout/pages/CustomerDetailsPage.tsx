import { LockKeyhole } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/logos/logo.png'
import { B2CDetailsForm } from '../components/b2c/B2CDetailsForm'
import { B2BDetailsForm } from '../components/b2b/B2BDetailsForm'
import { CustomerTypeToggle } from '../components/CustomerTypeToggle'
import { useCheckoutStore } from '../store/checkoutStore'
import type { B2BCustomerDetails, B2CCustomerDetails } from '../types/checkout'
import './customerDetails.css'

export function CustomerDetailsPage() {
  const { customerType, setCustomerType, setCustomer } = useCheckoutStore()
  const navigate = useNavigate()

  const continueAsB2C = (details: B2CCustomerDetails) => {
    setCustomer({ type: 'b2c', details })
    navigate('/checkout/payment')
  }

  const continueAsB2B = (details: B2BCustomerDetails) => {
    setCustomer({ type: 'b2b', details })
    navigate('/checkout/payment')
  }

  return (
    <section className="customer-checkout-page">
      {/* <p className="customer-checkout-progress">Secure checkout <span>·</span> Step 1 of 3</p> */}
      <section className="customer-details-card" aria-labelledby="customer-details-heading">
        <header className="customer-card-brand">
          <div>
            <img src={logo} alt="" />
            <strong>Maendeleo Asilia</strong>
          </div>
          <LockKeyhole size={17} aria-label="Secure checkout" />
        </header>

        <CustomerTypeToggle value={customerType} onChange={setCustomerType} />
        <h1 id="customer-details-heading">Customer Details</h1>

        {customerType === 'b2c'
          ? <B2CDetailsForm onSubmit={continueAsB2C} />
          : <B2BDetailsForm onSubmit={continueAsB2B} />}

        <p className="customer-card-security">
          <LockKeyhole size={17} aria-hidden="true" />
          <span>Your information is secure and will only be used to process your order.</span>
        </p>
      </section>
    </section>
  )
}
