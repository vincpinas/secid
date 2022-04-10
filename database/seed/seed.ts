import { PrismaClient } from '@prisma/client';
import models from './models.exports';

const prisma = new PrismaClient()

async function main() {
  await prisma.user.createMany({
    data: models.users, skipDuplicates: true
  })
}

main().catch((e) => {
    throw e;
}).finally(async () => {
    await prisma.$disconnect();
})