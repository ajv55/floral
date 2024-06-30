'use client';
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Cart from "./cart";

export default function Header() {

   

  return (
    <div className='w-full h-[32rem] flex  justify-between items-center '>
      <Cart />
        <div  className='w-[50%] bg-gradient-to-bl from-pink-800 via-pink-600 to-pink-900 h-[32rem] flex flex-col justify-center items-center gap-8'>
            <motion.h1 initial={{ x: '-100vw' }} animate={{ x: 0 }}  transition={{ type: 'spring', stiffness: 50,  duration: 1 }} className='text-6xl text-center text-white font-medium tracking-wide'>Sweet <span className=' bg-gradient-to-bl from-purple-300 text-7xl via-violet-300 to-teal-300 bg-clip-text text-transparent'>Bliss</span> Bakery</motion.h1>
            <motion.h4 initial={{x: '-100vw'}} animate={{x: 0}} transition={{type: 'spring', stiffness: 40, duration: 1 }} className='text-4xl text-center text-white font-medium tracking-wide'>Indulge in <span className=' bg-gradient-to-bl from-cyan-900 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent'>Freshly Baked Goodness</span> and <span className=' bg-gradient-to-br from-orange-300 via-pink-200 to-red-200 bg-clip-text text-transparent'>Blossoming Beauty</span></motion.h4>
        </div>
        <div style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url("/cupcakes.jpg")'}} className='w-[50%] h-[32rem] bg-center bg-cover'></div>
        
    </div>
  )
}
