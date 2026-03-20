import {z} from 'zod'

export const userAndBookIdSchema = z.object({
    bookId: z.string().uuid(),
    userId: z.string().uuid()
})

export const loanIdSchema = z.object({
    id: z.string().uuid()
})

export const userIdLoanSchema = z.object({
    user_id: z.string().uuid()
})