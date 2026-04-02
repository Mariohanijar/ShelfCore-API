import {prisma} from "../../lib/prisma.js"

export async function getAllUsers(){
   const users = prisma.user.findMany(
      {
         select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            address: true,
         }
      }
   )

   return users
}