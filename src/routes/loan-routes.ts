import type { FastifyInstance } from "fastify";
import { createLoan, getAllLateLoans, getAllLoans, renewLoan, returnBook } from "../http/loan-controller.js";

export async function appLoanRoutes(app: FastifyInstance) {
    app.post("/loans", createLoan)
    app.patch('/loans/:id/return', returnBook)
    app.get('/loans', getAllLoans)
    app.get('/loans/late',getAllLateLoans)
    app.patch('/loans/:id/renew', renewLoan)
}