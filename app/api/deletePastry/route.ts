import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const searchParams = await req.nextUrl.searchParams;
  const id = searchParams.get('id')

  try {
    // Retrieve the existing cupcake list
    const existingList = await prisma.pastries.findFirst();
    const pastry = existingList ? JSON.parse(existingList.pastriesList!) : [];

    // Filter out the cupcake to delete
    const updatedPastry = pastry.filter((p: { id: string }) => p.id !== id);

    // Update the database with the new list
    await prisma.pastries.update({
      where: { id: existingList?.id },
      data: { pastriesList: JSON.stringify(updatedPastry) },
    });

    return NextResponse.json({ message: 'Pastry deleted successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error deleting pastry:', error);
    return NextResponse.json({ error: 'Failed to delete pastry' }, { status: 500 });
  }
}
