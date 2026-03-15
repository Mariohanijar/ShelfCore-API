import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { registerServices } from "../services/user/register-user-service.js";
import { getAllUsers } from "../services//user/get-users-service.js";
import { getUserById } from "../services/user/get-users-by-id-service.js";
import { deleteUserById } from "../services/user/delete-user-by-id-service.js";
import { updateUserById } from "../services/user/update-user-by-id-service.js";
import { updateUserBodySchema, userIdSchemaParams } from "../schemas/users/user-params-schema.js"

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

export async function getUsers(request: FastifyRequest, reply: FastifyReply) {
    const users = await getAllUsers()

    return reply.status(200).send({"number of users": users.length,users})
}

export async function getUser(request: FastifyRequest, reply: FastifyReply) {
    const {id} = userIdSchemaParams.parse(request.params)
    const user = await getUserById(id)

    return reply.status(200).send(user)
}

export async function deleteUser(request: FastifyRequest, reply: FastifyReply) {

    const {id} = userIdSchemaParams.parse(request.params)
    const user = await deleteUserById(id)

    return reply.status(204).send()
}

export async function updateUser(request: FastifyRequest, reply: FastifyReply) {
  const { id } = userIdSchemaParams.parse(request.params)
  const body = updateUserBodySchema.parse(request.body)

  const user = await updateUserById({id,...body})

  return reply.status(200).send(user)
}