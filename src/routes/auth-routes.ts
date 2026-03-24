import type { FastifyInstance } from "fastify";
import { authUser } from "../http/auth-controller.js";

export async function appAuthRoutes(app: FastifyInstance) {
    app.post('/sessions/',authUser)
}