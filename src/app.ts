import fastify from "fastify";
import { PrismaClient } from "./generated/prisma/index.js";
import {z} from 'zod'

export const app = fastify()

const prisma = new PrismaClient()

