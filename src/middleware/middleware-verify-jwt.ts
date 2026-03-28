import jwt from "jsonwebtoken"
import { env } from "../env/index.js"
import type { FastifyReply, FastifyRequest } from "fastify"
import { AppError } from "../errors/app-error.js"

export async function verifyJWT(request: FastifyRequest, reply: FastifyReply) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('unauthorized',401)
  }

  if (!authHeader.startsWith("Bearer ")) {
    throw new AppError('Invalid token format',401)
  }

  const token = authHeader.replace("Bearer ", "")

  try {
    const decoded = jwt.verify(token, env.SIGNATURE_TOKEN) as { sub: string , role: "USER" | "ADMIN"}

    request.user = {
      id: decoded.sub,
      role: decoded.role
    }
  } catch (err) {
    throw new AppError("Invalid or expired token", 401)
  }
}