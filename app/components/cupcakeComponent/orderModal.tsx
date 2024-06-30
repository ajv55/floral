'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { setIsOrderModalOpen } from '@/app/slices/orderSlice';

const OrderModal = () => {
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const order = {
      buyerName,
      buyerEmail,
      buyerPhone,
      cupcakes: [],
      floralArrangements: [],
      totalAmount: 30 * 4,
    };
    // Submit order logic here
    console.log(order);
  
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        className="bg-white rounded-lg p-6 w-full max-w-md"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <h2 className="text-2xl font-semibold text-[#121481] mb-4">Place Your Order</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={buyerName}
              onChange={(e) => setBuyerName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={buyerEmail}
              onChange={(e) => setBuyerEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={buyerPhone}
              onChange={(e) => setBuyerPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Cupcake</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
            //   value={product.name}
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Quantity</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-lg"
            //   value={product.quantity}
              disabled
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              onClick={() => dispatch(setIsOrderModalOpen(false))}
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
            >
              Place Order
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default OrderModal;
