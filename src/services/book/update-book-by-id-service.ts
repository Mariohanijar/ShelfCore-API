import type { BookCategory } from "../../generated/prisma/index.js";
import { prisma } from "../../lib/prisma.js";

interface UpdateUserSchema {
    id: string,
    title?: string | undefined,
    author?: string | undefined,
    publishedYear?: number | undefined,
    category?: BookCategory | undefined,
    availableQuantity?: number | undefined
}

export async function updateBookByIdUseCase({ id, author, availableQuantity, category, publishedYear, title }: UpdateUserSchema) {
    if (title) {
        const bookWithSameTitle = await prisma.book.findFirst({
            where: {
                title: {
                    equals: title,
                    mode: 'insensitive'
                },
                NOT: {
                    id: id
                }
            }
        })
        
        if (bookWithSameTitle) {
            throw new Error("Book already exists")
        }
    }

    const data: any = {}
    if (author) data.author = author
    if (availableQuantity) data.availableQuantity = availableQuantity
    if (category) data.category = category
    if (publishedYear) data.publishedYear = publishedYear
    if (title) data.title = title

    const updatedBook = await prisma.book.update({
        where: {id: id},
        data
    })

    return updatedBook
    }
