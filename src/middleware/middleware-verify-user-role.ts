import type { FastifyReply, FastifyRequest } from "fastify";

export function verifyUserRole(requiredRole: 'USER' | 'ADMIN') {
    return async (request: FastifyRequest, reply: FastifyReply)=>{
        const role = request.user.role
        
        if(role !== requiredRole){
            return reply.status(403).send({
                message: "You are not allowed to acess this route"
            })
        }

    }
     
}