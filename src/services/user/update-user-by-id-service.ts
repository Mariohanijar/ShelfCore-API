import {prisma} from "../../lib/prisma.js"
import { hash } from "bcryptjs"

interface UpdateUserRequest{
    id: string
    name?: string | undefined
    email?: string | undefined
    password?: string | undefined
    phone?: string | undefined
    address?: string | undefined
    birthDate?: Date | undefined
}


export async function updateUserById({id,name,email,password,phone,address,birthDate}:UpdateUserRequest) {
    
    let password_hash: string | undefined

    if(password){
        password_hash = await hash(password,6)
    }
    
    const data: any = {}
    if (name) data.name = name
    if (email) data.email = email
    if (phone) data.phone = phone
    if (address) data.address = address
    if (birthDate) data.birthDate = birthDate
    if (password_hash) data.password = password_hash

    const user = await prisma.user.update({
        where:{id},
        data
    })

    return user;
}