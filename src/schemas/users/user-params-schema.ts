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
    name: z.string().default("John Doe"),
    email: z.string().email().default("johndoe@gmail.com"),
    password: z.string().default("12345678"),
    phone: z.string().default('1234567889'),
    address: z.string().default("Wall street"),
    birthDate: z.coerce.date().default(new Date('2000-05-10')),
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