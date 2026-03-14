import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { PrismaClient } from "../generated/prisma/index.js";
import { hash } from "bcryptjs";
import { registerServices } from "../services/register-user-service.js";

export async function register(request: FastifyRequest, reply: FastifyReply) {
    
    

    const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    phone: z.string(),
    address: z.string(),
    birthDate: z.coerce.date()
    })

    const body = registerBodySchema.parse(request.body)

    try {
        await registerServices(body)
    } catch (error) {
        return reply.status(409).send()
    }

    return reply.status(201).send()
  
}