import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const searchParams = await req.nextUrl.searchParams;
  const id = searchParams.get('id')

  try {
    // Retrieve the existing cupcake list
    const existingList = await prisma.cupcakesList.findFirst();
    const cupcakes = existingList ? JSON.parse(existingList.cupcakesList!) : [];

    // Filter out the cupcake to delete
    const updatedCupcakes = cupcakes.filter((cupcake: { id: string }) => cupcake.id !== id);

    // Update the database with the new list
    await prisma.cupcakesList.update({
      where: { id: existingList?.id },
      data: { cupcakesList: JSON.stringify(updatedCupcakes) },
    });

    return NextResponse.json({ message: 'Cupcake deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting cupcake:', error);
    return NextResponse.json({ error: 'Failed to delete cupcake' }, { status: 500 });
  }
}
