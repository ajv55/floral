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
    <section  className="py-12 mt-20 bg-gradient-to-tl from-primary-dark via-pink-400 to-primary-light">
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="lg:text-6xl text-5xl font-medium text-gray-400 text-center">Our <span className={`${alex_brush.className}  text-8xl bg-gradient-to-bl from-pink-400 via-cyan-200 to-pink-400 bg-clip-text text-transparent `}>Specialties</span></h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* <!-- Gourmet Cupcakes --> */}
            <Gorumet />

            {/* <!-- Decadent Pastries --> */}
            <Pastries />

            {/* <!-- Elegant Floral Arrangements --> */}
            <Floral />

        </div>
        </div>
    </section>

  )
}
