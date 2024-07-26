import React from 'react'

export default function Print() {
  return (
    <div></div>
    // <div ref={receiptRef} className='hidden'>
    //     {orders.map((order, index) => (
    //       <div key={index} className="p-8 bg-white rounded-lg shadow-md mb-4">
    //         <h2 className="text-2xl font-bold mb-4">Receipt</h2>
    //         <p><strong>Name:</strong> {order.buyerName || 'N/A'}</p>
    //         <p><strong>Email:</strong> {order.buyerEmail || 'N/A'}</p>
    //         <p><strong>Phone:</strong> {order.buyerPhone || 'N/A'}</p>
    //         <h3 className="mt-4 mb-2 text-lg font-semibold">Cupcakes</h3>
    //         <ul>
    //           {order?.cupcakes?.map((cupcake, idx) => (
    //             <li key={idx} className="mb-2">
    //               <p><strong>Name:</strong> {cupcake.name}</p>
    //               <p><strong>Price:</strong> ${cupcake.price.toFixed(2)}</p>
    //               <p><strong>Quantity:</strong> {cupcake.quantity}</p>
    //             </li>
    //           ))}
    //         </ul>
    //         <p className="mt-4"><strong>Total Amount:</strong> ${order.totalAmount.toFixed(2)}</p>
    //       </div>
  )
}
