import { prisma } from "../../lib/prisma.js";

export async function getAllLateLoansUseCase() {
    
    const today = new Date()
    const loans = await prisma.loan.findMany({
        where: {
            returnedAt: null,
            returnDate: {
                lt: today
            }
        }
    })

    return loans


}