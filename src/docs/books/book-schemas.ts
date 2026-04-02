import { bookIdSchemaParams, bookTitleSchemaParams, registerBodySchema } from "../../schemas/book/book-schemas.js";

export const registerBookDocs = {
    schema: {
        tags: ['Books'],
        summary: "Create book",
        description: "he book's category. Accepted values are: ROMANCE, FICTION, HISTORY, SCIENCE.",
        security: [{ bearerAuth: [] }],
        body: registerBodySchema
    }
}

export const getAllBooksDocs = {
    schema: {
        tags: ['Books'],
        summary: "Read all the books",
    }
}

export const getBookByIdDocs = {
    schema: {
        tags: ['Books'],
        summary: "Read book by id",
        params: bookIdSchemaParams
    }
}

export const deleteBookByIdDocs = {
    schema: {
        tags: ['Books'],
        summary: "Delete a book by id",
        security: [{ bearerAuth: [] }],
        params: bookIdSchemaParams
    }
}

export const updateBookByIdDocs = {
    schema: {
        tags: ['Books'],
        summary: "Create book",
        security: [{ bearerAuth: [] }],
        params: bookIdSchemaParams,
        body: registerBodySchema
    }
}

export const getBookByTitleDocs = {
    schema: {
        tags: ['Books'],
        summary: "Read book by Title",
        params: bookTitleSchemaParams
    }
}