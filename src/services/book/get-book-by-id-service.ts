import { prisma } from "../../lib/prisma.js";

export async function getBookByIdUseCase(id: string) {
    const book = await prisma.book.findUnique({
        where: {
            id
        }
    })
    
    return book;
}