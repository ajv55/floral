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
            mainContorls.start('visible')
        }
    }, [isInView, mainContorls])

  return (
    <motion.div ref={ref}  variants={{visible: {x: 0, opacity: 1}}} initial={{x: '-20vw', opacity: 0}}  animate={mainContorls} transition={{duration: 1, delay: 0.25, stiffness: 80, type: 'spring'}}  className="bg-white  w-full h-[31rem] flex flex-col justify-start items-center gap-4 rounded-lg hover:shadow-pink-300 hover:cursor-pointer shadow-md overflow-hidden">
            <Image className="h-48 w-full object-cover" src="/cupcakes.jpg" width={200} height={200} alt="Gourmet Cupcakes"></Image>
            <div className="p-6">
                <h3 className="text-2xl  font-semibold bg-gradient-to-br from-amber-600 via-pink-600 to-pink-700 bg-clip-text text-transparent">Gourmet Cupcakes</h3>
                <p className="mt-3 text-gray-600">
                Handcrafted with love, our cupcakes are available in a variety of flavors.
                From classNameic vanilla and rich chocolate to seasonal specials like pumpkin spice and peppermint, we have something for every palate.
                </p>
                <div className=' h-16 flex justify-end items-end'>
                  <a href="#" className="mt-4 inline-block bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700">
                  Order Now
                  </a>
                </div>
            </div>
            </motion.div>
  )
}
