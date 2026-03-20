import { prisma } from "../../lib/prisma.js";

export async function renewLoanUseCase(id: string) {
    const loan = await prisma.loan.findUnique({
        where: {
            id,
        }
    })
    
    if (!loan) {
    throw new Error("loan not found")
    }
    
    if(loan?.renewCount > 1 ){
        throw new Error("You can't renew the same book more than two times")
    }

    const isLoaned = await prisma.loan.findMany({
        where: {
            id,
            returnedAt: null
        },
    })

    if (!isLoaned) {
        throw new Error("Book is not loaned")
    }

    const returnDate = new Date()
    returnDate.setDate(returnDate.getDate() + 7) 
    await prisma.loan.update({
        where: {
            id,
        },
        data: {
            returnDate,
            renewCount: {
                increment: 1
            }
        }
    })

}