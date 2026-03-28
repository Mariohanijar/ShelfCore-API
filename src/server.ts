import { app } from "./app.js";
import { AppError } from "./errors/app-error.js";

app.listen({
    host: '0.0.0.0',
    port: 3333,
}).then(()=> {
    console.log("http server running")
})

