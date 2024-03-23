import { getDefaultPassword } from "../lib/encryption-server";
import { MemberRole, Gender, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany();
  const startUps = await prisma.startUp.findMany();

  if (users.length == 0) {
    const password = await getDefaultPassword();
    await prisma.user.create({
      data: {
        name: "Jayant",
        email: "jayant.rd@sairam.edu.in",
        password,
        gender: Gender.MALE,
        role: MemberRole.ADMIN,
        isPasswordDefault: true,
      },
    });
    console.log("User Seed Executed");

  }
  if (startUps.length == 0) {
    await prisma.startUp.createMany({
      data: [
        {
          name: "DPIIT RECOGNIZED STARTUP",
        },
        { name: "NON DPIIT RECOGNIZED STARTUP" },
      ],
    });
    console.log("Start Up Seed Executed");
  }
}

main()
  .then(() => {
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error("SEED ERROR", e);
    prisma.$disconnect();
  });
