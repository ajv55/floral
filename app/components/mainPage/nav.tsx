'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, setIsCartOpen } from '../../slices/cartSlice';
import Cart from './cart';
import { motion } from 'framer-motion';
import { setIsOrderModalOpen } from '@/app/slices/orderSlice';
import { FiShoppingCart } from "react-icons/fi";
import { RootState } from '@/app/store';

const Navigation: React.FC = () => {

  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state: RootState) => state.cart.isCartOpen);



  return (
    <div className="w-full border-b z-30 border-zinc-600 fixed bg-white flex justify-between items-center p-2">
      <h1 className="text-3xl font-bold">Logo Goes Here</h1>
      <nav className="w-[45%] text-xl flex justify-evenly items-center">
        <Link className="hover:underline hover:text-red-300 underline-offset-4 hover:text-2xl" href="/" passHref>
          Home
        </Link>
        <Link className="hover:underline hover:text-red-300 underline-offset-4 hover:text-2xl" href="/about" passHref>
          About
        </Link>
        <Link className="hover:underline hover:text-red-300 underline-offset-4 hover:text-2xl" href="/contact" passHref>
          Contact
        </Link>
        <motion.button
          className="relative"
          onClick={() => dispatch(setIsCartOpen(!isCartOpen))}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiShoppingCart size={25} />
          {cartItems.length > 0 && (
            <motion.span
              className="absolute -top-2 -right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {cartItems.length}
            </motion.span>
          )}
        </motion.button>
      </nav>
      <Link href='/cupcakes' className="w-[13%] text-xl px-2 text-white rounded-2xl py-2.5 text-center bg-gradient-to-br from-pink-500 via-rose-400 to-[#121481] hover:from-[#FFEAE3] hover:via-rose-300 hover:to-pink-600">
          Place Order
        </Link>
      <Cart  />
    </div>
  );
};

export default Navigation;

