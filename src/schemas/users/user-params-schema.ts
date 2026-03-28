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

export const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    phone: z.string(),
    address: z.string(),
    birthDate: z.coerce.date(),
    })

export const registerAdminBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    phone: z.string(),
    address: z.string(),
    birthDate: z.coerce.date(),
    role: z.enum(['ADMIN','USER']).default('USER')
    })