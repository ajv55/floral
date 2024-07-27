import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const newPastry = await req.json();

    // Retrieve the existing cupcake list
    const existingList = await prisma.pastries.findFirst();
    const pastry = existingList ? JSON.parse(existingList.pastriesList!) : [];

    // Get the last ID and increment it
    const lastId = pastry.length > 0 ? Math.max(...pastry.map((p: { id: number }) => p.id)) : 0;
    const newId = lastId + 1;

    // Add the new cupcake with the incremented ID
    const pastryWithId = { ...newPastry, id: newId.toString() };
    pastry.push(pastryWithId);

    // Update the database with the new list
    await prisma.pastries.update({
      where: { id: existingList?.id },
      data: { pastriesList: JSON.stringify(pastry) },
    });

    return NextResponse.json(pastryWithId, { status: 201 });
  } catch (error) {
    console.error('Error adding pasty:', error);
    return NextResponse.json({ error: 'Failed to add pastry' }, { status: 500 });
  }
}