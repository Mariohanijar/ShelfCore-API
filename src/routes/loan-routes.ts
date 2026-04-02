import type { FastifyInstance } from "fastify";
import { createLoan, getAllLateLoans, getAllLoans, renewLoan, returnBook } from "../http/loan-controller.js";
import { verifyJWT } from "../middleware/middleware-verify-jwt.js";
import { verifyUserRole } from "../middleware/middleware-verify-user-role.js";
import { getAllLoansDocs, getLateLoansDocs, registerLoanDocs, renewLoansDocs, returnBookDocs } from "../docs/loans/loan-schemas.js";

export async function appLoanRoutes(app: FastifyInstance) {
    app.post("/loans", {...registerLoanDocs,preHandler: [verifyJWT, verifyUserRole('ADMIN')]},createLoan)
    app.patch('/loans/:id/return',{...returnBookDocs,preHandler: [verifyJWT, verifyUserRole('ADMIN')]} ,returnBook)
    app.get('/loans', {...getAllLoansDocs,preHandler: [verifyJWT, verifyUserRole('ADMIN')]} ,getAllLoans)
    app.get('/loans/late', {...getLateLoansDocs,preHandler: [verifyJWT, verifyUserRole('ADMIN')]} ,getAllLateLoans)
    app.patch('/loans/:id/renew',renewLoansDocs, renewLoan)
}