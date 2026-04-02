import { app } from "./app.js";
import { AppError } from "./errors/app-error.js";

app.setErrorHandler((error, request, reply) => {
  if (error instanceof AppError) {
    return reply.status(error.statusCode).send({
      message: error.message
    });
  }

  console.error(error);

  return reply.status(500).send({
    message: "Internal server error"
  });
});

app.listen({
  host: '0.0.0.0',
  port: 3333,
}).then(() => {
  console.log("http server running on http://localhost:3333");
  console.log("Swagger UI running on http://localhost:3333/docs");
});