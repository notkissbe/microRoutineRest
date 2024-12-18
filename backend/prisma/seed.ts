/*
model Termek {
  id      Int    @id @default(autoincrement())
  nev     String
  leiras  String
  ar      Int
  keszlet Int
}
*/

import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 5; i++) {
    await prisma.termek.create({
      data: {
        nev: faker.commerce.productName(),
        leiras: faker.commerce.productDescription(),
        ar: faker.number.int({ min: 1000, max: 10000 }),
        keszlet: faker.number.int({ min: 0, max: 100 }),
        //random picsum image
        keplink: "http://picsum.photos/" + Math.floor(Math.random()*100)+ "200/300"
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
