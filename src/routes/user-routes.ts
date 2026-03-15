import type { FastifyInstance } from "fastify";
import { deleteUser, getUser, getUsers, register, updateUser } from "../http/user-controller.js";

export async function appRoutes(app: FastifyInstance) {
    app.post('/users',register)
    app.get('/users', getUsers)
    app.get('/users/:id',getUser)
    app.delete('/users/:id', deleteUser)
    app.put('/users/:id', updateUser)
}