import { prisma } from "../../lib/prisma.js";

export async function getAllBooksUseCase() {
    const allBooks = prisma.book.findMany()
    return allBooks
}