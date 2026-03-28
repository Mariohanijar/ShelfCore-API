import { hash } from "bcryptjs"
import {prisma} from "../../lib/prisma.js"
import type { Role } from "../../generated/prisma/index.js"

interface RegisterUseCaseRequest{
    name: string,
    email: string,
    password: string,
    phone: string,
    address: string,
    birthDate: Date
    role: Role
}

export async function registerByAdminUseCase({name,email,password,phone,address,birthDate,role}:RegisterUseCaseRequest) {
    
    const password_hash = await hash(password,6)

    const userWithSameEmail = await prisma.user.findUnique({
        where: {
            email,
        },
    })

    if(userWithSameEmail){
        throw new Error("Email already exists")
    }

    await prisma.user.create({
        data: {
            name,
            email,
            password: password_hash,
            address,
            phone,
            birthDate,
            role
        },
    })
}