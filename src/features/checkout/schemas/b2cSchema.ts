import { z } from 'zod'

export function createB2CSchema(phoneDigits: number) {
  return z.object({
    fullName: z.string().trim().min(2, 'Enter your full name'),
    phone: z.string()
      .trim()
      .min(1, 'Enter your phone number')
      .refine((value) => /^\d+$/.test(value), 'Enter digits only')
      .refine((value) => !value.startsWith('0'), 'Phone number must not start with zero')
      .refine((value) => value.length === phoneDigits, `Enter exactly ${phoneDigits} digits for this country`),
    deliveryLocation: z.string().trim().min(2, 'Choose a delivery location'),
  })
}

export const b2cSchema = createB2CSchema(9)

export type B2CFormValues = z.infer<typeof b2cSchema>
