import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";


export async function GET() {

    const res = await prisma.cupcakesList.findFirst();
    
    const cupcakes = JSON.parse(res?.cupcakesList!)

    return NextResponse.json(cupcakes, {status: 201})
}