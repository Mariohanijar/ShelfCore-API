import type { FastifyInstance } from "fastify";
import { deleteUser, getMe, getUser, getUsers, register, updateUser } from "../http/user-controller.js";
import { getLoansByUserId } from "../http/loan-controller.js";
import { verifyJWT } from "../middleware/middleware-verify-jwt.js";

export async function appUserRoutes(app: FastifyInstance) {
    app.post('/users',register)
    app.get('/users', getUsers)
    app.get('/users/:id',{preHandler: verifyJWT},getUser)
    app.get('/users/me',{preHandler: verifyJWT},getMe)
    app.delete('/users/:id', deleteUser)
    app.put('/users/:id',updateUser)
    app.get('/users/:user_id/loans',{preHandler: verifyJWT}, getLoansByUserId)
    
}