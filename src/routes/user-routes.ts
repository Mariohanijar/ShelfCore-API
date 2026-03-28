import type { FastifyInstance } from "fastify";
import { deleteUser, getMe, getUser, getUsers, register, registerAdmin, updateUser } from "../http/user-controller.js";
import { getLoansByUserId } from "../http/loan-controller.js";
import { verifyJWT } from "../middleware/middleware-verify-jwt.js";
import { verifyUserRole } from "../middleware/middleware-verify-user-role.js";

export async function appUserRoutes(app: FastifyInstance) {
    app.post('/users',register)
    app.post('/users/admin',{preHandler: [verifyJWT, verifyUserRole('ADMIN')]},registerAdmin)
    app.get('/users', {preHandler: [verifyJWT, verifyUserRole('ADMIN')]} ,getUsers)
    app.get('/users/:id',{preHandler: verifyJWT},getUser)
    app.get('/users/me',{preHandler: verifyJWT},getMe)
    app.delete('/users/:id', {preHandler: [verifyJWT, verifyUserRole('ADMIN')]} ,deleteUser)
    app.put('/users/:id', {preHandler: [verifyJWT, verifyUserRole('ADMIN')]} ,updateUser)
    app.get('/users/:user_id/loans',{preHandler: verifyJWT}, getLoansByUserId)
    
}