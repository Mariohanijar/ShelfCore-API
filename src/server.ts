import { app } from "./app.js";
import { AppError } from "./errors/app-error.js";

app.listen({
    host: '0.0.0.0',
    port: 3333,
}).then(()=> {
    console.log("http server running")
})

app.setErrorHandler((error, request, reply) => {
  if (error instanceof AppError) {
    return reply.status(error.statusCode).send({
      message: error.message
    })
  }

  console.error(error)

  return reply.status(500).send({
    message: "Internal server error"
  })
})