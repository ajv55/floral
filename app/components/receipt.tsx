'use client';
import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { format, parseISO } from 'date-fns';

interface Order {
  id: string;
  buyerName?: string;
  buyerEmail?: string;
  buyerPhone?: string;
  cupcakes: {
    name: string;
    price: number;
    quantity: number;
  }[];
  totalAmount: number;
  status: string; // Added status field
}

interface ReceiptProps {
  orders: Order[];
  onCompleteOrder?: (id: string) => void; // Function to mark order as complete
}

const Receipt: React.FC<ReceiptProps> = ({ orders, onCompleteOrder }) => {
  const receiptRef = useRef<HTMLDivElement>(null);

  const handleGeneratePDF = () => {
    const doc = new jsPDF();

    let startY = 10;

    orders.forEach((order, index) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(18);
      doc.setTextColor('#121481');
      doc.text(`Receipt ${index + 1}`, doc.internal.pageSize.width / 2, startY, { align: 'center' });
      startY += 10;

      doc.setFontSize(12);
      doc.setTextColor('#333333');
      doc.text(`Name: ${order.buyerName || 'N/A'}`, 10, startY);
      doc.text(`Email: ${order.buyerEmail || 'N/A'}`, 10, startY + 10);
      doc.text(`Phone: ${order.buyerPhone || 'N/A'}`, 10, startY + 20);
      startY += 30;

      const tableHeight = (order.cupcakes.length + 2) * 10;

      if (startY + tableHeight > doc.internal.pageSize.height - 20) {
        doc.addPage();
        startY = 10;
      }

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
          valign: 'middle',
          halign: 'center',
          fillColor: '#FFEAE3',
          textColor: '#121481',
          minCellHeight: 20,
        },
      });

      startY = (doc as any).lastAutoTable.finalY + 10;

      if (startY + 30 > doc.internal.pageSize.height - 20) {
        doc.addPage();
        startY = 10;
      }

      doc.setFont('helvetica', 'bold');
      doc.setTextColor('#121481');
      doc.text(`Total Amount: $${order.totalAmount.toFixed(2)}`, 10, startY);
      startY += 20;

      if (startY + 10 > doc.internal.pageSize.height - 10) {
        doc.addPage();
        startY = 10;
      }

      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text('Thank you for your purchase!', 10, doc.internal.pageSize.height - 10);
      startY = doc.internal.pageSize.height - 10;

      if (index < orders.length - 1) {
        doc.addPage();
        startY = 10;
      }
    });

    doc.save('receipts.pdf');
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-3xl font-bold text-primary-dark mb-6">Orders</h3>
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search by customer"
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-pink"
        />
        <button className="bg-primary-pink text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-dark hover:text-primary-light transition duration-300">
          New Order
        </button>
      </div>
      <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm mb-6">
        <thead>
          <tr className="bg-primary-light text-primary-dark text-left">
            <th className="p-3 border-b border-gray-200">Order ID</th>
            <th className="p-3 border-b border-gray-200">Customer</th>
            <th className="p-3 border-b border-gray-200">Date</th>
            <th className="p-3 border-b border-gray-200">Time</th>
            <th className="p-3 border-b border-gray-200">Total</th>
            <th className="p-3 border-b border-gray-200">Status</th>
            <th className="p-3 border-b border-gray-200 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order: any, index) => {
            const formattedDate = format(new Date(order?.createdAt), 'MMM d');
            const dateObject = parseISO(order?.createdAt);
            const timeString = format(dateObject, 'hh:mm:ss a');

            return (
              <tr key={index} className="hover:bg-gray-100 transition duration-200">
                <td className="p-3 border-b border-gray-200">{order.id}</td>
                <td className="p-3 border-b border-gray-200">{order.buyerName}</td>
                <td className="p-3 border-b border-gray-200">{formattedDate}</td>
                <td className="p-3 border-b border-gray-200">{timeString}</td>
                <td className="p-3 border-b border-gray-200">{Math.round(order.totalAmount)}</td>
                <td className="p-3 border-b border-gray-200">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-white ${
                      order.status === 'Completed' ? 'bg-green-500' : order.status === 'Processing' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                  >
                    {order.status === null ? 'processing' : order.status}
                  </span>
                </td>
                <td className="p-3 border-b border-gray-200 text-right">
                  <button
                    className="ml-2 bg-gray-300 text-gray-700 font-bold py-1 px-3 rounded-lg hover:bg-gray-400 transition duration-300"
                  >
                    Mark Complete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div ref={receiptRef} className='hidden'>
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
      <div className="flex lg:flex justify-end space-x-4 mt-6">
        <button onClick={handleGeneratePDF} className="bg-primary-pink text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-dark hover:text-primary-light transition duration-300">
          Download All Receipts as PDF
        </button>
      </div>
    </div>
  );
};

export default Receipt;


