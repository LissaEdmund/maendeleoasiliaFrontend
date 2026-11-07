import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { routePaths } from '../../../../routes/routePaths'
import { b2bSchema, type B2BFormValues } from '../../schemas/b2bSchema'
import type { B2BCustomerDetails } from '../../types/checkout'

export function B2BDetailsForm({
  onSubmit,
}: {
  onSubmit: (details: B2BCustomerDetails) => void
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<B2BFormValues>({
    resolver: zodResolver(b2bSchema),
    defaultValues: { businessId: '' },
  })

  return (
    <div className="business-login">
      <h2>Business Login</h2>
      <p className="business-login-intro">
        Enter your Business ID to continue with your business checkout.
      </p>
      <form className="customer-details-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <label className="customer-form-field" htmlFor="business-id">
          <span>Business ID <b aria-hidden="true">*</b></span>
          <input
            id="business-id"
            autoComplete="organization"
            placeholder="Enter your Business ID"
            aria-invalid={Boolean(errors.businessId)}
            aria-describedby={errors.businessId ? 'business-id-error' : 'business-id-help'}
            required
            {...register('businessId')}
          />
          {errors.businessId
            ? <small id="business-id-error">{errors.businessId.message}</small>
            : <small id="business-id-help" className="business-id-help">Use the ID provided to your business.</small>}
        </label>

        <button className="button customer-continue-button" type="submit">
          Continue
        </button>
      </form>

      <p className="business-register-link">
        New Business? <Link to={routePaths.contacts}>Register here</Link>
      </p>
    </div>
  )
}
