import type { BookCategory } from "../../generated/prisma/index.js"
import {prisma} from "../../lib/prisma.js"

interface RegisterUseCaseRequest{
    title: string,
    author: string,
    publishedYear: number,
    category: BookCategory
    availableQuantity: number
}

export async function registerBookUseCase({author,availableQuantity,category,publishedYear,title}: RegisterUseCaseRequest) {
    const bookWithSameTitle = await prisma.book.findFirst({
        where: {
            title: {
                equals: title,
                mode:  'insensitive'
            },
        },
    })

    if(bookWithSameTitle){
        throw new Error("Book already exists")
    }   

    await prisma.book.create({
        data: {
            title,
            author,
            publishedYear,
            category,
            availableQuantity
        }
    })
}