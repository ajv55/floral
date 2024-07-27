import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const newFloral = await req.json();

    // Retrieve the existing cupcake list
    const existingList = await prisma.floralList.findFirst();
    const floral = existingList ? JSON.parse(existingList.floralList!) : [];

    // Get the last ID and increment it
    const lastId = floral.length > 0 ? Math.max(...floral.map((f: { id: number }) => f.id)) : 0;
    const newId = lastId + 1;

    // Add the new cupcake with the incremented ID
    const floralWithId = { ...newFloral, id: newId.toString() };
    floral.push(floralWithId);

    // Update the database with the new list
    await prisma.floralList.update({
      where: { id: existingList?.id },
      data: { floralList: JSON.stringify(floral) },
    });

    return NextResponse.json(floralWithId, { status: 201 });
  } catch (error) {
    console.error('Error adding floral:', error);
    return NextResponse.json({ error: 'Failed to add floral' }, { status: 500 });
  }
}