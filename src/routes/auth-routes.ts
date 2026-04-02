import type { FastifyInstance } from "fastify";
import { authUser } from "../http/auth-controller.js";
import { userAuthDocs } from "../docs/auth/auth-schemas.js";


export async function appAuthRoutes(app: FastifyInstance) {
    app.post('/sessions/',userAuthDocs,authUser)
}