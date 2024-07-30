'use client';
import Image from 'next/image'
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Floral() {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainContorls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainContorls.start('visible')
        }
    }, [isInView, mainContorls])
  return (
    <motion.div ref={ref}  variants={{visible: {x: 0, opacity: 1}}} initial={{x: '-20vw', opacity: 0}}  animate={mainContorls} transition={{duration: 1, delay: 1, stiffness: 120, type: 'spring'}} className="bg-white hover:shadow-pink-300 hover:cursor-pointer w-full h-[31rem] flex flex-col justify-start items-center gap-4 rounded-lg shadow-md overflow-hidden">
        <Image className=" h-48 w-full object-cover" src="https://www.alphafern.net/wp-content/uploads/2023/04/AdobeStock_187094556.jpeg" width={200} height={200} alt="Elegant Floral Arrangements"></Image>
        <div className="p-6">
            <h3 className="text-2xl  font-semibold bg-gradient-to-br from-amber-600 via-pink-600 to-pink-700 bg-clip-text text-transparent">Elegant Floral Arrangements</h3>
            <p className="mt-3 text-gray-600">
            Our florists craft stunning bouquets and arrangements using the freshest blooms.
            Ideal for gifting or adding a touch of beauty to your home or event.
            </p>
            <div className=' lg:h-28 h-20 flex justify-end items-end'>
             <Link href="/floral" className="lg:mt-4 mt-0 inline-block bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700">
             Browse Flowers
             </Link>
            </div>
        </div>
    </motion.div>
  )
}
