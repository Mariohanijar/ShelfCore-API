import jwt from "jsonwebtoken"
import { env } from "../env/index.js"
import type { FastifyReply, FastifyRequest } from "fastify"

export async function verifyJWT(request: FastifyRequest, reply: FastifyReply) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    return reply.status(401).send({ message: "Unauthorized" })
  }

  if (!authHeader.startsWith("Bearer ")) {
    return reply.status(401).send({ message: "Invalid token format" })
  }

  const token = authHeader.replace("Bearer ", "")

  try {
    const decoded = jwt.verify(token, env.SIGNATURE_TOKEN) as { sub: string , role: "USER" | "ADMIN"}

    request.user = {
      id: decoded.sub,
      role: decoded.role
    }
  } catch (err) {
    return reply.status(401).send({ message: "Invalid or expired token" })
  }
}