// app/api/generate-pdf/route.ts
import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function POST(req: NextRequest) {
  try {
    const { orders } = await req.json();

    const browser = await puppeteer.launch();
    const pdfBuffers: Buffer[] = [];

    for (const order of orders) {
      // Ensure buyer information is present and valid
      const buyerName = order.buyerName ?? '';
      const buyerEmail = order.buyerEmail ?? '';
      const buyerPhone = order.buyerPhone ?? '';

      const page = await browser.newPage();
      await page.setContent(`
        <html>
          <body>
            <div>
              <h2>Receipt</h2>
              <p><strong>Name:</strong> ${buyerName}</p>
              <p><strong>Email:</strong> ${buyerEmail}</p>
              <p><strong>Phone:</strong> ${buyerPhone}</p>
              <h3>Cupcakes</h3>
              <ul>
                ${order.cupcakes.map((cupcake: any) => `
                  <li>
                    <p><strong>Name:</strong> ${cupcake.name}</p>
                    <p><strong>Price:</strong> $${cupcake.price.toFixed(2)}</p>
                    <p><strong>Quantity:</strong> ${cupcake.quantity}</p>
                  </li>
                `).join('')}
              </ul>
              <p><strong>Total Amount:</strong> $${order.totalAmount.toFixed(2)}</p>
            </div>
          </body>
        </html>
      `);
      const pdf = await page.pdf({ format: 'A4' });
      pdfBuffers.push(pdf);
      await page.close();
    }

    await browser.close();

    const combinedPdf = Buffer.concat(pdfBuffers);

    return NextResponse.json(combinedPdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=receipts.pdf',
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json('Error generating PDF', { status: 500 });
  }
}
