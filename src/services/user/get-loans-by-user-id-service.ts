import { prisma } from "../../lib/prisma.js";

 export async function getLoansByUserIdUseCase(user_id: string) {
    const loans = await prisma.loan.findMany({
        where: {
        user_id,
        returnedAt: null
        }
    })
    return loans
}