import { z } from "zod"
import {
    registerAdminBodySchema,
    registerBodySchema,
    updateUserBodySchema,
    userIdSchemaParams
} from "../../schemas/users/user-params-schema.js"

export const createUserDocs = {
    schema: {
        tags: ['Normal Users'],
        summary: "Create a new User",
        body: registerBodySchema,
        response: {
            201: z.object({ message: z.string() }),
            400: z.object({ message: z.string() })
        }
    }
}

export const updateUserDocs = {
    schema: {
        tags: ['Admin Users'],
        summary: 'update data of the user',
        security: [{ bearerAuth: [] }],
        params: userIdSchemaParams,
        body: updateUserBodySchema,
    }
};

export const updateMeDocs = {
    schema: {
        tags: ['Normal Users'],
        summary: 'update data of the currently user',
        security: [{ bearerAuth: [] }],
        body: updateUserBodySchema,
    }
};

export const getUsersDocs = {
    schema: {
        tags: ['Admin Users'],
        description: 'List Users',
        security: [{ bearerAuth: [] }]
    }
}

export const createUserByAdminDocs = {
    schema: {
        tags: ['Admin Users'],
        description: 'Allows an administrator to create a new user and assign a specific role (Admin or Normal User)',
        security: [{ bearerAuth: [] }],
        body: registerAdminBodySchema
    }
}

export const deleteUserByIdDocs = {
    schema: {
        tags: ['Admin Users'],
        description: 'Delete user by id',
        security: [{ bearerAuth: [] }],
        params: userIdSchemaParams
    }
}

export const deleteMeDocs = {
    schema: {
        tags: ['Normal Users'],
        description: 'Delete currently user',
        security: [{ bearerAuth: [] }],
    }
}

export const getUserByIdDocs = {
    schema: {
        tags: ['Admin Users'],
        summary: "Get user by Id",
        security: [{ bearerAuth: [] }],
        params: userIdSchemaParams
    }
}

export const getMeDocs = {
    schema: {
        tags: ['Normal Users'],
        summary: "Get your data",
        security: [{ bearerAuth: [] }],
    }
}

export const getLoansByUserIdDocs = {
    schema: {
        tags: ['Admin Users'],
        summary: "Get loans by user id",
        security: [{ bearerAuth: [] }],
        params: userIdSchemaParams
    }
}