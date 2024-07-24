import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";


export async function GET() {

    const res = await prisma.pastries.findFirst();
    
    const pastries = JSON.parse(res?.pastriesList!)

    return NextResponse.json(pastries, {status: 201})
}