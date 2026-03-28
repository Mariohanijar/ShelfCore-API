import type { FastifyReply, FastifyRequest } from "fastify";
import { AppError } from "../errors/app-error.js";

export function verifyUserRole(requiredRole: 'USER' | 'ADMIN') {
    return async (request: FastifyRequest, reply: FastifyReply)=>{
        const role = request.user.role
        
        if(role !== requiredRole){
            throw new AppError('You are not allowed to acess this route')
        }

    }
     
}