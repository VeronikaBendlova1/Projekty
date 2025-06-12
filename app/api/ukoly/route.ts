import { NextRequest, NextResponse } from 'next/server';
import { getAllUkoly, addUkol } from '../../lib/ukoly';

 // uprav cestu dle složky

export async function GET(req: NextRequest) {
  const ukoly = await getAllUkoly();
  return NextResponse.json(ukoly);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nazev, datum } = body;
  const newUkol = await addUkol(nazev, new Date(datum));
  return NextResponse.json(newUkol, { status: 201 });
}
