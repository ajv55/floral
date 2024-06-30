'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, selectCartItems, selectTotalAmount, setIsCartOpen } from '../../slices/cartSlice';
import { motion, AnimatePresence } from 'framer-motion';
import { RootState } from '@/app/store';



const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const isCartOpen = useSelector((state: RootState) => state.cart.isCartOpen)

  const handleRemove = (id: string) => {
    dispatch(removeItem(id));
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div
          className=" absolute top-24 right-0 w-full flex items-center justify-end bg-transparent bg-opacity-50 z-50"
        >
          <motion.div
            className="bg-white rounded-lg p-6 w-full max-w-md"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-[#121481]">Your Cart</h2>
              <button
                className="text-gray-600 focus:outline-none"
                onClick={() => dispatch(setIsCartOpen(false))}
              >
                Close
              </button>
            </div>
            {cartItems.length === 0 ? (
              <p className="text-gray-600">Your cart is empty</p>
            ) : (
              <>
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id} className="mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">{item.name}</span>
                        <span className="text-pink-500 font-bold">${item.price.toFixed(2)}</span>
                        <span className="text-gray-500">Qty: {item.quantity}</span>
                        <button
                          className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                          onClick={() => handleRemove(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-[#121481]">Total: ${totalAmount.toFixed(2)}</h3>
                  <button className="bg-pink-500 text-white px-4 py-2 rounded mt-4 hover:bg-pink-600">
                    Checkout
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Cart;
