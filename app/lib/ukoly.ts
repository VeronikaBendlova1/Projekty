// lib/ukoly.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllUkoly() {
  return prisma.ukol.findMany({
    where: { Smazano: false },
    orderBy: { Datum: 'asc' }
  });
}

export async function addUkol(nazev: string, datum: Date) {
  return prisma.ukol.create({
    data: {
      Nazev: nazev,
      Datum: datum,
      Hotovo: false,
      Smazano: false
    }
  });
}
