'use client';
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Cart from "./cart";

export default function Header() {

   

  return (
    <div className='w-full h-[32rem] flex  justify-between items-center '>
      <Cart />
      <div className='w-[50%] bg-gradient-to-bl from-pink-500 via-rose-400 to-[#FFEAE3] h-[32rem] flex flex-col justify-center items-center gap-8'>
         <motion.h1 initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 50,  duration: 1 }} className='text-6xl text-center text-white font-medium tracking-wide'>Sweet <span className='bg-gradient-to-bl from-[#121481] via-[#FFEAE3] to-[#121481] bg-clip-text text-transparent text-7xl'>Bliss</span> Bakery</motion.h1>
         <motion.h4 initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 40, duration: 1 }} className='text-4xl text-center text-white font-medium tracking-wide'>Indulge in <span className='bg-gradient-to-bl from-[#FFEAE3] via-[#121481] to-[#FFEAE3] bg-clip-text text-transparent'>Freshly Baked Goodness</span> and <span className='bg-gradient-to-br from-[#FFEAE3] via-[#121481] to-rose-300 bg-clip-text text-transparent'>Blossoming Beauty</span></motion.h4>
      </div>
        <div style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url("/cupcakes.jpg")'}} className='w-[50%] h-[32rem] bg-center bg-cover'></div>
        
    </div>
  )
}
