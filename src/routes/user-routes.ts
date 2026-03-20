import type { FastifyInstance } from "fastify";
import { deleteUser, getUser, getUsers, register, updateUser } from "../http/user-controller.js";
import { getLoansByUserId } from "../http/loan-controller.js";

export async function appUserRoutes(app: FastifyInstance) {
    app.post('/users',register)
    app.get('/users', getUsers)
    app.get('/users/:id',getUser)
    app.delete('/users/:id', deleteUser)
    app.put('/users/:id', updateUser)
    app.get('/users/:user_id/loans', getLoansByUserId)
    
}