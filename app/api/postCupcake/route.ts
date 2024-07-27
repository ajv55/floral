import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const newCupcake = await req.json();

    // Retrieve the existing cupcake list
    const existingList = await prisma.cupcakesList.findFirst();
    const cupcakes = existingList ? JSON.parse(existingList.cupcakesList!) : [];

    // Get the last ID and increment it
    const lastId = cupcakes.length > 0 ? Math.max(...cupcakes.map((c: { id: number }) => c.id)) : 0;
    const newId = lastId + 1;

    // Add the new cupcake with the incremented ID
    const cupcakeWithId = { ...newCupcake, id: newId.toString() };
    cupcakes.push(cupcakeWithId);

    // Update the database with the new list
    await prisma.cupcakesList.update({
      where: { id: existingList?.id },
      data: { cupcakesList: JSON.stringify(cupcakes) },
    });

    return NextResponse.json(cupcakeWithId, { status: 201 });
  } catch (error) {
    console.error('Error adding cupcake:', error);
    return NextResponse.json({ error: 'Failed to add cupcake' }, { status: 500 });
  }
}

