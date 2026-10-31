import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { b2cSchema, type B2CFormValues } from '../../schemas/b2cSchema'
export function B2CDetailsForm({ onSubmit, initialLocation = '' }: { onSubmit: (values: B2CFormValues) => void; initialLocation?: string }) {
  const { register, handleSubmit, formState: { errors } } = useForm<B2CFormValues>({ resolver: zodResolver(b2cSchema), defaultValues: { fullName: '', phone: '', deliveryLocation: initialLocation } })
  return <form className="form-stack" onSubmit={handleSubmit(onSubmit)}><label>Full name<input autoComplete="name" {...register('fullName')} />{errors.fullName && <small>{errors.fullName.message}</small>}</label><label>Phone number<input autoComplete="tel" {...register('phone')} />{errors.phone && <small>{errors.phone.message}</small>}</label><label>Delivery location<input placeholder="Detecting location… edit if needed" {...register('deliveryLocation')} />{errors.deliveryLocation && <small>{errors.deliveryLocation.message}</small>}</label><button className="button" type="submit">Continue to payment</button></form>
}
