import type { FastifyReply, FastifyRequest } from "fastify"
import { authenticateUserUseCase } from "../services/auth/authenticate-user-service.js"
import { userAuthSchema } from "../schemas/auth/auth-schemas.js"

export async function authUser(request: FastifyRequest, reply: FastifyReply) {
    const userLogin = userAuthSchema.parse(request.body)
    try {
        const {token} = await authenticateUserUseCase(userLogin)
        return reply.status(200).send({ token })
    } catch (error) {
       return reply.status(401).send(error)
    }
}