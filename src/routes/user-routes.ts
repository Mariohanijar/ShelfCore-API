import type { FastifyInstance } from "fastify";
import { deleteMe, deleteUser, getMe, getUser, getUsers, register, registerAdmin, updateMe, updateUser } from "../http/user-controller.js";
import { getLoansByUserId } from "../http/loan-controller.js";
import { verifyJWT } from "../middleware/middleware-verify-jwt.js";
import { verifyUserRole } from "../middleware/middleware-verify-user-role.js";
import { createUserByAdminDocs, createUserDocs, deleteMeDocs, deleteUserByIdDocs, getLoansByUserIdDocs, getMeDocs, getUserByIdDocs, getUsersDocs, updateMeDocs, updateUserDocs } from "../docs/users/user-schemas.js";

export async function appUserRoutes(app: FastifyInstance) {
    app.post('/users', createUserDocs ,register)
    app.post('/users/admin',{...createUserByAdminDocs,preHandler: [verifyJWT, verifyUserRole('ADMIN')]},registerAdmin)
    app.get('/users', { ...getUsersDocs ,preHandler: [verifyJWT, verifyUserRole('ADMIN')]} ,getUsers)
    app.get('/users/:id',{...getUserByIdDocs,preHandler: verifyJWT},getUser)
    app.get('/users/me',{...getMeDocs,preHandler: verifyJWT},getMe)
    app.delete('/users/:id', {...deleteUserByIdDocs,preHandler: [verifyJWT, verifyUserRole('ADMIN')]} ,deleteUser)
    app.delete('/users/me', {...deleteMeDocs ,preHandler: [verifyJWT]},deleteMe)
    app.put('/users/:id', {...updateUserDocs ,preHandler: [verifyJWT, verifyUserRole('ADMIN')]} ,updateUser)
    app.put('/users/me',{...updateMeDocs ,preHandler: [verifyJWT]}, updateMe)
    app.get('/users/:user_id/loans',{...getLoansByUserIdDocs,preHandler: verifyJWT}, getLoansByUserId)
    
}

