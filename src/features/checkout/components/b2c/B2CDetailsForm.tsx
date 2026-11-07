import { useEffect, useRef, useState } from 'react'
import { ChevronDown, MapPin } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { createB2CSchema, type B2CFormValues } from '../../schemas/b2cSchema'

const countryCallingCodes = [
  { country: 'Tanzania', code: '+255', nationalNumberLength: 9 },
  { country: 'Kenya', code: '+254', nationalNumberLength: 9 },
  { country: 'Uganda', code: '+256', nationalNumberLength: 9 },
  { country: 'Rwanda', code: '+250', nationalNumberLength: 9 },
  { country: 'Burundi', code: '+257', nationalNumberLength: 8 },
]

export function B2CDetailsForm({
  onSubmit,
  initialLocation = '',
}: {
  onSubmit: (values: B2CFormValues) => void
  initialLocation?: string
}) {
  const [callingCode, setCallingCode] = useState('+255')
  const [locationStatus, setLocationStatus] = useState('')
  const [isDetectingLocation, setIsDetectingLocation] = useState(false)
  const selectedCountry = countryCallingCodes.find(({ code }) => code === callingCode) ?? countryCallingCodes[0]
  const phoneDigits = selectedCountry.nationalNumberLength
  const phoneFieldRef = useRef<HTMLInputElement>(null)
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<B2CFormValues>({
    resolver: zodResolver(createB2CSchema(phoneDigits)),
    defaultValues: { fullName: '', phone: '', deliveryLocation: initialLocation },
  })
  const phoneField = register('phone')
  const locationField = register('deliveryLocation')

  useEffect(() => {
    void trigger('phone')
  }, [phoneDigits, trigger])

  function updateCallingCode(code: string) {
    const country = countryCallingCodes.find((option) => option.code === code)
    if (!country) return

    setCallingCode(code)
    setValue('phone', (phoneFieldRef.current?.value ?? '').slice(0, country.nationalNumberLength), {
      shouldDirty: true,
    })
  }

  function updatePhone(value: string) {
    const digits = value.replace(/\D/g, '').replace(/^0+/, '').slice(0, phoneDigits)
    setValue('phone', digits, { shouldDirty: true, shouldTouch: true, shouldValidate: true })
  }

  function submitDetails(values: B2CFormValues) {
    onSubmit({
      ...values,
      phone: `${callingCode} ${values.phone.trim()}`,
    })
  }

  function detectCurrentLocation() {
    if (!navigator.geolocation) {
      setLocationStatus('Location detection is not supported by this browser. Enter your delivery location manually.')
      return
    }

    setIsDetectingLocation(true)
    setLocationStatus('Finding your current location…')
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const latitude = coords.latitude.toFixed(5)
        const longitude = coords.longitude.toFixed(5)
        setValue('deliveryLocation', `Current location (${latitude}, ${longitude})`, {
          shouldDirty: true,
          shouldValidate: true,
        })
        setLocationStatus('Location detected. You can edit it to add delivery address details.')
        setIsDetectingLocation(false)
      },
      (error) => {
        const message = error.code === error.PERMISSION_DENIED
          ? 'Location permission was denied. Allow location access in your browser or enter the address manually.'
          : error.code === error.POSITION_UNAVAILABLE
            ? 'Your location is unavailable right now. Enter the address manually.'
            : 'Location detection timed out. Try again or enter the address manually.'
        setLocationStatus(message)
        setIsDetectingLocation(false)
      },
      { enableHighAccuracy: false, maximumAge: 60_000, timeout: 12_000 },
    )
  }

  return (
    <form className="customer-details-form" onSubmit={handleSubmit(submitDetails)} noValidate>
      <label className="customer-form-field">
        <span>Full Name <b aria-hidden="true">*</b></span>
        <input
          autoComplete="name"
          required
          aria-invalid={Boolean(errors.fullName)}
          aria-describedby={errors.fullName ? 'customer-name-error' : undefined}
          {...register('fullName')}
        />
        {errors.fullName && <small id="customer-name-error">{errors.fullName.message}</small>}
      </label>

      <div className="customer-form-field">
        <label htmlFor="customer-phone">Phone Number <b aria-hidden="true">*</b></label>
        <div className={`customer-phone-control${errors.phone ? ' has-error' : ''}`}>
          <span className="customer-country-code">
            <span className="sr-only">Country calling code</span>
            <select
              aria-label={`Country calling code: ${selectedCountry.country}`}
              value={callingCode}
              onChange={(event) => updateCallingCode(event.target.value)}
            >
              {countryCallingCodes.map(({ code }) => (
                <option key={code} value={code}>{code}</option>
              ))}
            </select>
            <ChevronDown size={14} aria-hidden="true" />
          </span>
          <input
            id="customer-phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            placeholder={selectedCountry.country === 'Burundi' ? '71 234 567' : '712 345 678'}
            pattern={`[1-9][0-9]{${phoneDigits - 1}}`}
            required
            aria-label="Phone number"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'customer-phone-error' : undefined}
            {...phoneField}
            onChange={(event) => updatePhone(event.currentTarget.value)}
            ref={(element) => {
              phoneField.ref(element)
              phoneFieldRef.current = element
            }}
          />
        </div>
        {errors.phone && <small id="customer-phone-error">{errors.phone.message}</small>}
      </div>

      <div className="customer-form-field">
        <label htmlFor="customer-delivery-location">Delivery Location <b aria-hidden="true">*</b></label>
        <div className="customer-location-control">
          <MapPin size={16} aria-hidden="true" />
          <input
            id="customer-delivery-location"
            {...locationField}
            placeholder="Dar es Salaam, Kinondoni"
            required
            aria-invalid={Boolean(errors.deliveryLocation)}
            aria-describedby={errors.deliveryLocation ? 'customer-location-error' : undefined}
          />
          <ChevronDown size={15} aria-hidden="true" />
        </div>
        {errors.deliveryLocation && (
          <small id="customer-location-error">{errors.deliveryLocation.message}</small>
        )}
        <button
          className="customer-change-location"
          type="button"
          onClick={detectCurrentLocation}
          disabled={isDetectingLocation}
        >
          {isDetectingLocation ? 'Finding location…' : 'Use my current location'}
        </button>
        {locationStatus && <small className="customer-location-status" role="status">{locationStatus}</small>}
      </div>

      <button className="button customer-continue-button" type="submit">
        Continue to Payment
      </button>
    </form>
  )
}
