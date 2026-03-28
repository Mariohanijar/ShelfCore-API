import { hash } from "bcryptjs"
import {prisma} from "../../lib/prisma.js"
import { AppError } from "../../errors/app-error.js"

interface RegisterUseCaseRequest{
    name: string,
    email: string,
    password: string,
    phone: string,
    address: string,
    birthDate: Date
}

export async function registerServices({name,email,password,phone,address,birthDate}:RegisterUseCaseRequest) {
    
    const password_hash = await hash(password,6)

    const userWithSameEmail = await prisma.user.findUnique({
        where: {
            email,
        },
    })

    if(userWithSameEmail){
        throw new AppError("Email already exists",409)
    }

    await prisma.user.create({
        data: {
            name,
            email,
            password: password_hash,
            address,
            phone,
            birthDate,
        },
    })
}