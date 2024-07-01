'use client';
import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { useReactToPrint } from 'react-to-print';

interface Order {
  buyerName?: string; // Make these fields optional
  buyerEmail?: string;
  buyerPhone?: string;
  cupcakes: {
    name: string;
    price: number;
    quantity: number;
  }[];
  totalAmount: number;
}

interface ReceiptProps {
  orders: Order[];
}

const Receipt: React.FC<ReceiptProps> = ({ orders }) => {
  const receiptRef = useRef<HTMLDivElement>(null);

  const handleGeneratePDF = () => {
    const doc = new jsPDF();
  
    let startY = 10; // Initial starting Y position for content
  
    orders.forEach((order, index) => {
      // Title and basic information
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(18);
      doc.text(`Receipt ${index + 1}`, doc.internal.pageSize.width / 2, startY, { align: 'center' });
      startY += 10; // Adjust vertical spacing after title
  
      doc.setFontSize(12);
      doc.setTextColor('#333333');
      doc.text(`Name: ${order.buyerName || 'N/A'}`, 10, startY);
      doc.text(`Email: ${order.buyerEmail || 'N/A'}`, 10, startY + 10);
      doc.text(`Phone: ${order.buyerPhone || 'N/A'}`, 10, startY + 20);
      startY += 30; // Adjust vertical spacing after basic info
  
      // Check if cupcakes table fits on the current page
      const tableHeight = (order.cupcakes.length + 2) * 10; // Estimate based on rows and padding
  
      if (startY + tableHeight > doc.internal.pageSize.height - 20) {
        doc.addPage(); // Add a new page if cupcakes table would overflow
        startY = 10; // Reset startY for new page
      }
  
      // Cupcakes table
      (doc as any).autoTable({
        startY,
        head: [['#', 'Name', 'Price', 'Quantity']],
        body: order.cupcakes.map((cupcake, idx) => [
          idx + 1,
          cupcake.name,
          `$${cupcake.price.toFixed(2)}`,
          cupcake.quantity,
        ]),
        theme: 'striped',
        styles: {
          cellPadding: 5,
          fontSize: 10,
          textColor: '#333333',
          valign: 'middle',
          halign: 'center',
          fillStyle: 'F',
          minCellHeight: 20,
        },
      });
  
      // Update startY after placing cupcakes table
      startY = (doc as any).lastAutoTable.finalY + 10;
  
      // Total amount
      if (startY + 30 > doc.internal.pageSize.height - 20) {
        doc.addPage(); // Add new page if total amount would overflow
        startY = 10; // Reset startY for new page
      }
  
      doc.setFont('helvetica', 'bold');
      doc.text(`Total Amount: $${order.totalAmount.toFixed(2)}`, 10, startY);
      startY += 20; // Adjust vertical spacing after total amount
  
      // Footer information
      if (startY + 10 > doc.internal.pageSize.height - 10) {
        doc.addPage(); // Add new page if footer would overflow
        startY = 10; // Reset startY for new page
      }
  
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text('Thank you for your purchase!', 10, doc.internal.pageSize.height - 10);
      startY = doc.internal.pageSize.height - 10; // Set startY at bottom of page for next receipt
  
      // Add page for each receipt except the last one
      if (index < orders.length - 1) {
        doc.addPage();
        startY = 10; // Reset startY for new page
      }
    });
  
    doc.save('receipts.pdf');
  };
  
  

  const handlePrint = useReactToPrint({
    content: () => receiptRef.current,
  });

  console.log(orders)

  return (
    <div>
      <div ref={receiptRef}>
        {orders.map((order, index) => (
          <div key={index} className="p-8 bg-white rounded-lg shadow-md mb-4">
            <h2 className="text-2xl font-bold mb-4">Receipt</h2>
            <p><strong>Name:</strong> {order.buyerName || 'N/A'}</p>
            <p><strong>Email:</strong> {order.buyerEmail || 'N/A'}</p>
            <p><strong>Phone:</strong> {order.buyerPhone || 'N/A'}</p>
            <h3 className="mt-4 mb-2 text-lg font-semibold">Cupcakes</h3>
            <ul>
              {order?.cupcakes?.map((cupcake, idx) => (
                <li key={idx} className="mb-2">
                  <p><strong>Name:</strong> {cupcake.name}</p>
                  <p><strong>Price:</strong> ${cupcake.price.toFixed(2)}</p>
                  <p><strong>Quantity:</strong> {cupcake.quantity}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4"><strong>Total Amount:</strong> ${order.totalAmount.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <button onClick={handleGeneratePDF} className="mt-4 bg-pink-500 text-white py-2 px-4 rounded-lg">
        Download All Receipts as PDF
      </button>
      <button onClick={handlePrint} className="mt-4 bg-amber-500 text-white py-2 px-4 rounded-lg">
        Print All Receipts
      </button>
    </div>
  );
};

export default Receipt;
