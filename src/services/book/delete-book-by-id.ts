import { prisma } from "../../lib/prisma.js";

export async function deleteUserByIdUseCase(id: string) {
    await prisma.book.delete({
        where:{
            id
        }
    })
}