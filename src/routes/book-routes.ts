import type { FastifyInstance } from "fastify";
import { deleteBookById, getAllBooks, getBookById, getBookByTitle, register, update } from "../http/book-controller.js";
import { verifyJWT } from "../middleware/middleware-verify-jwt.js";
import { verifyUserRole } from "../middleware/middleware-verify-user-role.js";
import { deleteBookByIdDocs, getAllBooksDocs, getBookByIdDocs, getBookByTitleDocs, registerBookDocs, updateBookByIdDocs } from "../docs/books/book-schemas.js";

export async function appBookRoutes(app: FastifyInstance) {
    app.post('/books', {...registerBookDocs,preHandler: [verifyJWT, verifyUserRole('ADMIN')]},register)
    app.get('/books',getAllBooksDocs,getAllBooks)
    app.get('/books/:id', getBookByIdDocs, getBookById)
    app.get('/books/search/:title', getBookByTitleDocs,getBookByTitle)
    app.delete('/books/:id',{...deleteBookByIdDocs,preHandler: [verifyJWT, verifyUserRole('ADMIN')]} , deleteBookById)
    app.put('/books/:id', {...updateBookByIdDocs,preHandler: [verifyJWT, verifyUserRole('ADMIN')]} ,update)
}