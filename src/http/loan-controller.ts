import type { FastifyReply, FastifyRequest } from "fastify";
import { loanIdSchema, userAndBookIdSchema, userIdLoanSchema } from "../schemas/loan/loan-schemas.js";
import { loanBookUseCase } from "../services/loan/loan-book-service.js";
import { returnBorrowedBookUseCase } from "../services/loan/return-borrowed-book.js";
import { getLoansByUserIdUseCase } from "../services/user/get-loans-by-user-id-service.js";
import { getAllLoansUseCase } from "../services/loan/get-all-loans-service.js";
import { getAllLateLoansUseCase } from "../services/loan/get-all-late-loans-service.js";
import { renewLoanUseCase } from "../services/loan/renew-loan-service.js";


export async function createLoan(request: FastifyRequest, reply: FastifyReply) {
    const body = userAndBookIdSchema.parse(request.body)
    await loanBookUseCase(body)
    return reply.status(201).send()
}

export async function returnBook(request: FastifyRequest, reply: FastifyReply) {
    const {id} = loanIdSchema.parse(request.params)
    await returnBorrowedBookUseCase(id)
    return reply.status(201).send()
}

export async function getLoansByUserId(request: FastifyRequest, reply: FastifyReply) {
    const {user_id} = userIdLoanSchema.parse(request.params)
    const loans = await getLoansByUserIdUseCase(user_id)
    return reply.status(200).send(loans)
}

export async function getAllLoans(request: FastifyRequest, reply: FastifyReply) {
    const loans = await getAllLoansUseCase()
    reply.status(200).send(loans)
}

export async function getAllLateLoans(request: FastifyRequest, reply: FastifyReply) {
    const lateLoans = await getAllLateLoansUseCase()
    reply.status(200).send({"count": lateLoans.length,lateLoans})
}

export async function renewLoan(request: FastifyRequest, reply: FastifyReply) {
    const {id} = loanIdSchema.parse(request.params)
    await renewLoanUseCase(id)
    reply.status(201)
}