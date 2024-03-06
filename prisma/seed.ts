import { getDefaultPassword } from '../lib/encryption-server';
import {MemberRole, Gender,  PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const users = await prisma.user.findMany();
    if (users.length == 0) {
        const password = await getDefaultPassword();
        await prisma.user.create({
           data :{
            name: "Jayant",
            email: "jayant.rd@sairam.edu.in",
            password,
            gender: Gender.MALE,
            role: MemberRole.ADMIN,
            isPasswordDefault: true
           }
        })
        console.log("Seed Executed")
    }
}

main().then(() => {
    prisma.$disconnect();
}).catch((e) => {
    console.error("SEED ERROR", e);
    prisma.$disconnect();
})
