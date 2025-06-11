import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// Příklad: načtení všech úkolů
export async function getAllUkoly() {
  return await prisma.ukoly.findMany()
}

// Příklad: přidání nového úkolu
export async function addUkol(nazev: string, datum: Date, hotovo: boolean = false, smazano: boolean = false) {
  return await prisma.ukoly.create({
    data: {
      Nazev: nazev,
      Datum: datum,
      Hotovo: hotovo,
      Smazano: smazano,
    },
  })
}
