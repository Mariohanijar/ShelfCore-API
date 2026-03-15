import {prisma} from "../../lib/prisma.js"

export async function deleteUserById(id: string) {
    await prisma.user.delete({
        where: {
            id
        }
    })
}