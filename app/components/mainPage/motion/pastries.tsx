'use client';
import Image from 'next/image'
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Pastries() {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainContorls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainContorls.start('visible')
        }
    }, [isInView, mainContorls])
  return (
    <motion.div ref={ref}  variants={{visible: {x: 0, opacity: 1}}} initial={{x: '-20vw', opacity: 0}}  animate={mainContorls} transition={{duration: 1, delay: 0.75, stiffness: 70, type: 'spring'}}   className="bg-white hover:shadow-pink-300 hover:cursor-pointer w-full h-[31rem] flex flex-col justify-start items-center gap-4 rounded-lg shadow-md overflow-hidden">
        <Image className="h-48 w-full object-cover" src="https://www.liveatshoalcreek.com/wp-content/uploads/2023/01/m9b1-scaled.jpg" width={200} height={200} alt="Decadent Pastries"></Image>
        <div className="p-6">
            <h3 className="text-2xl  font-semibold bg-gradient-to-br from-amber-600 via-pink-600 to-pink-700 bg-clip-text text-transparent">Decadent Pastries</h3>
            <p className="mt-3 text-gray-600">
            Freshly baked daily, our pastries range from flaky croissants and Danish pastries to rich tarts and éclairs.
            Perfect for breakfast, a coffee break, or dessert.
            </p>
            <div className=' lg:h-28 h-20 flex justify-end items-end'>
              <Link href="/pastries" className="mt-4  inline-block bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700">
              Shop Pastries
              </Link>
            </div>
        </div>
    </motion.div>
  )
}
