import fastify from "fastify";
import { appRoutes } from "./routes/index.js";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";

export const app = fastify()

app.register(appRoutes)

/*
await app.register(fastifySwagger, {
    openapi: {
        info: {
            title: 'Shelfcore API',
            description: 'Library Loan Management API',
            version: '1.0.0'
        }
    }
})

await app.register(fastifySwaggerUi, {
    routePrefix: '/docs'
})*/
