import { z } from 'zod'
export const b2bSchema = z.object({ businessName: z.string().trim().min(2, 'Business account details are required'), registrationNumber: z.string().trim().min(1, 'Business account details are required'), deliveryLocation: z.string().trim().min(2, 'Registered delivery location is required') })
export type B2BFormValues = z.infer<typeof b2bSchema>
