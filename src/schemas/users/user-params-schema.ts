import { z } from "zod"

export const userIdSchemaParams = z.object({
  id: z.string().uuid()
})

export const updateUserBodySchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  password: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  birthDate: z.coerce.date().optional()
})
