import type { FastifyInstance } from "fastify";
import { createLoan, getAllLateLoans, getAllLoans, renewLoan, returnBook } from "../http/loan-controller.js";
import { verifyJWT } from "../middleware/middleware-verify-jwt.js";
import { verifyUserRole } from "../middleware/middleware-verify-user-role.js";

export async function appLoanRoutes(app: FastifyInstance) {
    app.post("/loans", {preHandler: [verifyJWT, verifyUserRole('ADMIN')]},createLoan)
    app.patch('/loans/:id/return', returnBook)
    app.get('/loans', {preHandler: [verifyJWT, verifyUserRole('ADMIN')]} ,getAllLoans)
    app.get('/loans/late', {preHandler: [verifyJWT, verifyUserRole('ADMIN')]} ,getAllLateLoans)
    app.patch('/loans/:id/renew', renewLoan)
}