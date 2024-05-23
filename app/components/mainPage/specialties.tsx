'use client';
import Image from 'next/image'
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { alex_brush } from '@/app/font/font';
import Gorumet from './motion/gorumet';
import Pastries from './motion/pastries';
import Floral from './motion/floral';

export default function Specialities() {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView) {
            mainControls.start('visible')
        }
    }, [isInView, mainControls])

  return (
    <motion.section ref={ref}  variants={{hidden: {x: '-100vw', opacity: 0}, visible: {x: 0, opacity: 1}}} initial='hidden' animate={mainControls} transition={{duration: 1, delay: 1, stiffness: 100, type: 'spring'}}  className="py-12 mt-20 bg-gray-100">
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-medium text-gray-900 text-center">Our <span className={`${alex_brush.className} text-8xl`}>Specialties</span></h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* <!-- Gourmet Cupcakes --> */}
            <Gorumet />

            {/* <!-- Decadent Pastries --> */}
            <Pastries />

            {/* <!-- Elegant Floral Arrangements --> */}
            <Floral />

        </div>
        </div>
    </motion.section>

  )
}
