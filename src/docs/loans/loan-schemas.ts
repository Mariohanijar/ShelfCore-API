import { loanIdSchema, userAndBookIdSchema } from "../../schemas/loan/loan-schemas.js";

export const registerLoanDocs = {
    schema: {
            tags: ['Loans'],
            summary: "Create a Loan",
            description: "Users are limited to a maximum of two concurrent books and cannot borrow new ones if they have overdue items",
            security: [{ bearerAuth: [] }],
            body: userAndBookIdSchema
        }
}

export const returnBookDocs = {
    schema: {
            tags: ['Loans'],
            summary: "return a loaned book",
            security: [{ bearerAuth: [] }],
            params: loanIdSchema
        }
}

export const getAllLoansDocs = {
    schema: {
            tags: ['Loans'],
            summary: "get all Loans",
            security: [{ bearerAuth: [] }],
        }
}

export const getLateLoansDocs = {
    schema: {
            tags: ['Loans'],
            summary: "get all late Loans",
            security: [{ bearerAuth: [] }],
        }
}

export const renewLoansDocs = {
    schema: {
            tags: ['Loans'],
            summary: "Create a Loan",
            security: [{ bearerAuth: [] }],
            params: loanIdSchema
        }
}