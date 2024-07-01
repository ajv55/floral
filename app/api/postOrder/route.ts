import prisma from '@/app/lib/prisma';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {

    const body = await req.json()
    const {cartItems, totalAmount, buyer } = body;
    const {name, email, phone} = buyer;
    console.log(cartItems)
    console.log(buyer);

    const order = await prisma.order.create({
      data: {
          cupcakes: {
              create: cartItems.map((item: any) => ({
                  name: item.name,
                  price: item.price,
                  quantity: item.quantity
              }))
          },
          buyerEmail: email,
          buyerName: name,
          buyerPhone: phone,
          totalAmount: totalAmount,
      },
  });
  

    return NextResponse.json(order, {status: 201})
}




