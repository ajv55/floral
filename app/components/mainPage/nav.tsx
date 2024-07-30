'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, setIsCartOpen } from '../../slices/cartSlice';
import Cart from './cart';
import { AnimatePresence, motion } from 'framer-motion';
import { setIsOrderModalOpen } from '@/app/slices/orderSlice';
import { FiShoppingCart } from "react-icons/fi";
import { RootState } from '@/app/store';
import { GiCupcake } from "react-icons/gi";
import { alex_brush } from '@/app/font/font';
import { LuLayoutDashboard } from "react-icons/lu";
import { useSession } from 'next-auth/react';
import { RiMenu3Line } from "react-icons/ri";

const Navigation: React.FC = () => {

  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state: RootState) => state.cart.isCartOpen);
  const {data: session} = useSession();
  const [isOpen, setIsOpen] = useState(false);

  console.log(session?.user.role);
  const userRole = session?.user?.role



  return (
    <div className="w-full border-b  z-30 border-zinc-600 fixed bg-white flex justify-between items-center p-2">
       <AnimatePresence>
          {isOpen && (
                    <motion.div
                        initial={{ x: '-100vw' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100vw' }}
                        transition={{ type: 'spring', stiffness: 50 }}
                        className="fixed top-0 left-0 w-64 h-screen rounded-r-2xl bg-primary-dark flex flex-col justify-between items-start shadow-lg z-50"
                    >
                       <div className=" flex justify-center items-center gap-3 font-bold"><GiCupcake size={30} className='text-primary-light' /><h1 className={`${alex_brush.className} lg:text-4xl text-3xl text-primary-pink mt-2`}>Sweet Bliss Bakery</h1></div>
                        <nav className="flex flex-col p-4 space-y-14">
                            <Link onClick={() => setIsOpen(!isOpen)} className="text-2xl font-semibold text-white  hover:text-teal-500" href="/">
                            Home
                            </Link>
                            <Link onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-white  hover:text-teal-500" href="/about">
                            About
                            </Link>
                            <Link onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-white  hover:text-teal-500" href="/cupcakes">
                            Cupackes
                            </Link>
                            <Link onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-white  hover:text-teal-500" href="/contact">
                            Contact
                            </Link>
                        </nav>

                        <div className=' lg:w-full lg:mt-0 p-1 w-[97%] h-[4rem] flex justify-center items-center'>
                            <p className='text-sm self-end text-white  text-center lg:text-right'>Copyright © 2024 Sweet Bliss Bakery. All rights reserved.</p>
                        </div>
                    </motion.div>
                )}
      </AnimatePresence>
      <div className=" flex justify-center items-center gap-3 font-bold"><GiCupcake size={30} className='text-primary-dark' /><h1 className={`${alex_brush.className} lg:text-4xl text-lg text-primary-dark mt-2`}>Sweet Bliss Bakery</h1></div>
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
        {userRole === 'admin' && <Link href='/orders'><LuLayoutDashboard size={25} className='text-primary-dark' /></Link>}
      <div>
        <RiMenu3Line size={30} onClick={() => setIsOpen(!isOpen)} className='text-primary-dark lg:hidden block' />
      </div>
      <nav className="w-[45%] text-xl lg:flex hidden justify-evenly items-center">
        <Link className="hover:underline hover:text-red-300 underline-offset-4 hover:text-2xl" href="/" passHref>
          Home
        </Link>
        <Link className="hover:underline hover:text-red-300 underline-offset-4 hover:text-2xl" href="/about" passHref>
          About
        </Link>
        <Link className="hover:underline hover:text-red-300 underline-offset-4 hover:text-2xl" href="/contact" passHref>
          Contact
        </Link>
        
      </nav>
      <Link href='/cupcakes' className="w-[13%] lg:block hidden text-xl px-2 text-white rounded-2xl py-2.5 text-center bg-gradient-to-br from-pink-500 via-rose-400 to-[#121481] hover:from-[#FFEAE3] hover:via-rose-300 hover:to-pink-600">
          Place Order
        </Link>
      <Cart  />
    </div>
  );
};

export default Navigation;

