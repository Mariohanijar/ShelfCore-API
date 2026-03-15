import type { FastifyInstance } from "fastify";
import { deleteBookById, getAllBooks, getBookById, register, update } from "../http/book-controller.js";

export async function appBookRoutes(app: FastifyInstance) {
    app.post('/books',register)
    app.get('/books',getAllBooks)
    app.get('/books/:id', getBookById)
    app.delete('/books/:id', deleteBookById)
    app.put('/books/:id',update)
}