import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const orders = await prisma.order.findMany({
            include: {
                cupcakes: true, // Include all related cupcakes
            },
        });

        return NextResponse.json(orders, { status: 201 });
    } catch (error) {
        console.error('Error fetching orders:', error);
        return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
    }
}