'use client';
import Image from 'next/image'
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Gorumet() {
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
    <motion.div ref={ref}  variants={{visible: {x: 0, opacity: 1}}} initial={{x: '-20vw', opacity: 0}}  animate={mainContorls} transition={{duration: 1, delay: 0.25, stiffness: 80, type: 'spring'}}  className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image className="h-48 w-full object-cover" src="/cupcakes.jpg" width={200} height={200} alt="Gourmet Cupcakes"></Image>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Gourmet Cupcakes</h3>
                <p className="mt-3 text-gray-600">
                Handcrafted with love, our cupcakes are available in a variety of flavors.
                From classNameic vanilla and rich chocolate to seasonal specials like pumpkin spice and peppermint, we have something for every palate.
                </p>
                <a href="#" className="mt-4 inline-block bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700">
                Order Now
                </a>
            </div>
            </motion.div>
  )
}
