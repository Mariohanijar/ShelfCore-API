import type { FastifyInstance } from "fastify";
import { appUserRoutes } from "./user-routes.js";
import { appBookRoutes } from "./book-routes.js";
import { appLoanRoutes } from "./loan-routes.js";
import { appAuthRoutes } from "./auth-routes.js";

export async function appRoutes(app:FastifyInstance) {
    app.register(appUserRoutes)
    app.register(appBookRoutes)
    app.register(appLoanRoutes)
    app.register(appAuthRoutes)
}