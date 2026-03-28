
import bcrypt from "bcryptjs"
import { prisma } from "../../lib/prisma.js"
import jwt from "jsonwebtoken"
import {env} from '../../env/index.js'
import { AppError } from "../../errors/app-error.js"

interface AuthenticateUserRequest{
    email: string,
    password: string
}


export async function authenticateUserUseCase({email, password}: AuthenticateUserRequest) {
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })
    
    if(!user){
        throw new AppError("User not exists", 400)
    }

    const isUserPasswordCorrect = await bcrypt.compare(password, user.password)

    if(!isUserPasswordCorrect){
        throw new AppError("Incorrect email or password", 400)
    }

    const token = jwt.sign(
        {sub: user.id,
         role: user.role
        },
        env.SIGNATURE_TOKEN,
        {expiresIn: "1d"}
    )

    return {token}

}