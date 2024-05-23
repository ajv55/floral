'use client';
import Image from 'next/image'
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Pastries() {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainContorls = useAnimation();

    useEffect(() => {
        if(isInView){
            console.log(isInView);
            mainContorls.start('visible')
        }
    }, [isInView, mainContorls])
  return (
    <motion.div ref={ref}  variants={{visible: {x: 0, opacity: 1}}} initial={{x: '-20vw', opacity: 0}}  animate={mainContorls} transition={{duration: 1, delay: 0.75, stiffness: 70, type: 'spring'}}   className="bg-white rounded-lg shadow-md overflow-hidden">
        <Image className="h-48 w-full object-cover" src="https://www.liveatshoalcreek.com/wp-content/uploads/2023/01/m9b1-scaled.jpg" width={200} height={200} alt="Decadent Pastries"></Image>
        <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">Decadent Pastries</h3>
            <p className="mt-3 text-gray-600">
            Freshly baked daily, our pastries range from flaky croissants and Danish pastries to rich tarts and éclairs.
            Perfect for breakfast, a coffee break, or dessert.
            </p>
            <a href="#" className="mt-4 inline-block bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700">
            Shop Pastries
            </a>
        </div>
    </motion.div>
  )
}
