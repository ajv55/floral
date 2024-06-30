import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";


export async function GET() {

    const res = await prisma.floralList.findFirst();
    
    const floral = JSON.parse(res?.floralList!)

    return NextResponse.json(floral, {status: 201})
}