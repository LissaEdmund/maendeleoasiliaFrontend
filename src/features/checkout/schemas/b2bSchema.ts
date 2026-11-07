import { z } from 'zod'

export const b2bSchema = z.object({
  businessId: z.string().trim().min(1, 'Enter your Business ID'),
})

export type B2BFormValues = z.infer<typeof b2bSchema>
