import { z } from 'zod'
export const b2cSchema = z.object({ fullName: z.string().trim().min(2, 'Enter your full name'), phone: z.string().trim().min(7, 'Enter a valid phone number'), deliveryLocation: z.string().trim().min(2, 'Choose a delivery location') })
export type B2CFormValues = z.infer<typeof b2cSchema>
