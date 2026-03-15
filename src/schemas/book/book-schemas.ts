import { z } from "zod"
import { BookCategory } from "../../generated/prisma/index.js"


export const bookIdSchemaParams = z.object({
  id: z.string().uuid()
})

export const registerBodySchema = z.object({
    title: z.string(),
    author: z.string(),
    publishedYear: z.int(),
    category: z.enum(BookCategory),
    availableQuantity: z.int().min(0)
    })

export const bookUpdateBodySchema = z.object({
    title: z.string().optional(),
    author: z.string().optional(),
    publishedYear: z.int().optional(),
    category: z.enum(BookCategory).optional(),
    availableQuantity: z.int().min(0).optional()
})