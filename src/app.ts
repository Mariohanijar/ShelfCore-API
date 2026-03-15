import fastify from "fastify";
import { appRoutes } from "./routes/index.js";

export const app = fastify()

app.register(appRoutes)