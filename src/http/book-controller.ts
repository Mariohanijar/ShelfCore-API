import { bookIdSchemaParams, bookTitleSchemaParams, bookUpdateBodySchema, registerBodySchema } from "../schemas/book/book-schemas.js"
import { deleteUserByIdUseCase } from "../services/book/delete-book-by-id.js";
import { getBookByIdUseCase } from "../services/book/get-book-by-id-service.js";
import { getAllBooksUseCase } from "../services/book/get-user-service.js";
import { registerBookUseCase } from "../services/book/register-book-service.js"
import type { FastifyReply, FastifyRequest } from "fastify";
import { updateBookByIdUseCase } from "../services/book/update-book-by-id-service.js";
import { getBookByTitleUseCase } from "../services/book/get-book-by-title.js";

export async function register(request: FastifyRequest, reply: FastifyReply) { 
    const body = registerBodySchema.parse(request.body)
    await registerBookUseCase(body)
    return reply.status(201).send()
}

export async function getAllBooks(request: FastifyRequest, reply: FastifyReply) {
     const books = await getAllBooksUseCase()
     reply.status(200).send(books)
}

export async function getBookById(request: FastifyRequest, reply: FastifyReply) {
    const bookId = bookIdSchemaParams.parse(request.params)
    const book = await getBookByIdUseCase(bookId.id)
    return reply.status(200).send(book)
}

export async function getBookByTitle(request: FastifyRequest, reply: FastifyReply) {
    const bookTitle = bookTitleSchemaParams.parse(request.params)
    const books = await getBookByTitleUseCase(bookTitle.title)

    return reply.status(200).send(books)
}

export async function deleteBookById(request: FastifyRequest, reply: FastifyReply) {
    const bookId = bookIdSchemaParams.parse(request.params)
    const book = deleteUserByIdUseCase(bookId.id)
    reply.send(204)
}

export async function update(request: FastifyRequest, reply: FastifyReply) { 
    const {id} = bookIdSchemaParams.parse(request.params)
    const body = bookUpdateBodySchema.parse(request.body)
    
    await updateBookByIdUseCase({id,...body})
    return reply.status(201).send()
}