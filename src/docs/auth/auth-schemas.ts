import { userAuthSchema } from "../../schemas/auth/auth-schemas.js";
import {z} from 'zod'
export const userAuthDocs = {
    schema: {
        tags: ['auth'],
        summary: "Authenticate User",
        body: userAuthSchema,
        response: {
            201: z.object({ message: z.string() }),
            400: z.object({ message: z.string() })
        }
    }
}