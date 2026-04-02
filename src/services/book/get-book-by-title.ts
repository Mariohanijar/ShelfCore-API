import { prisma } from "../../lib/prisma.js";

export async function getBookByTitleUseCase(title: string) {
    const books = await prisma.book.findMany({
        where: {
            title: {
                contains: title,
                mode: 'insensitive'
            }
        },
        select: {
            title: true,
            author: true,
            category: true,
            availableQuantity: true,
            publishedYear: true
        }
    })

    return books
}