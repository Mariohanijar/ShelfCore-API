import {prisma} from "../../lib/prisma.js"

export async function getAllUsers(){
   const users = prisma.user.findMany()

   return users
}