import type { FastifyInstance } from "fastify";
import { deleteBookById, getAllBooks, getBookById, register, update } from "../http/book-controller.js";
import { verifyJWT } from "../middleware/middleware-verify-jwt.js";
import { verifyUserRole } from "../middleware/middleware-verify-user-role.js";

export async function appBookRoutes(app: FastifyInstance) {
    app.post('/books', {preHandler: [verifyJWT, verifyUserRole('ADMIN')]},register)
    app.get('/books',getAllBooks)
    app.get('/books/:id', getBookById)
    app.delete('/books/:id', {preHandler: [verifyJWT, verifyUserRole('ADMIN')]} , deleteBookById)
    app.put('/books/:id', {preHandler: [verifyJWT, verifyUserRole('ADMIN')]} ,update)
}