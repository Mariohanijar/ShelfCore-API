import { prisma } from "../../lib/prisma.js";

export async function getAllLoansUseCase() {
    const loans = await prisma.loan.findMany()

    return loans
}