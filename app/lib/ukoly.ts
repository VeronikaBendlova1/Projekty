import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllUkoly() {
  return await prisma.ukoly.findMany({
    where: { Smazano: false },  // zobrazuj jen nesmazané
    orderBy: { Datum: "asc" },
  });
}

export async function addUkol(nazev: string, datum: Date) {
  return await prisma.ukoly.create({
    data: {
      Nazev: nazev,
      Datum: datum,
      Hotovo: false,
      Smazano: false,
    },
  });
}

export async function markUkolAsDone(id: number) {
  return await prisma.ukoly.update({
    where: { Id: id },
    data: { Hotovo: true },
  });
}

export async function deleteUkol(id: number) {
  return await prisma.ukoly.update({
    where: { Id: id },
    data: { Smazano: true },
  });
}
