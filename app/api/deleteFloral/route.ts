import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const searchParams = await req.nextUrl.searchParams;
  const id = searchParams.get('id')

  try {
    // Retrieve the existing cupcake list
    const existingList = await prisma.floralList.findFirst();
    const floral = existingList ? JSON.parse(existingList.floralList!) : [];

    // Filter out the cupcake to delete
    const updatedFloral = floral.filter((f: { id: string }) => f.id !== id);

    // Update the database with the new list
    await prisma.floralList.update({
      where: { id: existingList?.id },
      data: { floralList: JSON.stringify(updatedFloral) },
    });

    return NextResponse.json({ message: 'Floral deleted successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error deleting floral:', error);
    return NextResponse.json({ error: 'Failed to delete floral' }, { status: 500 });
  }
}
