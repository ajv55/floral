'use client';
import { motion } from "framer-motion";
import style from '@/app/style.module.css';
import cup from '@/public/cup.svg';


export default function FloralHero() {
  return (
    <div className='bg-gradient-to-br from-pink-700 via-pink-400 to-pink-700 text-white py-20'>
    <motion.div
      className="container mx-auto text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl font-bold text-[#FFEAE3] mt-14 mb-4">Welcome to Floral Bliss</h1>
      <p className="text-xl mb-8">
        Discover our exquisite floral arrangements, perfect for any occasion.
      </p>
      <button className="bg-[#FFEAE3] hover:bg-[#fca98d] text-pink-800 py-2 px-4 rounded-lg font-bold">
        Explore Now
      </button>
    </motion.div>
  </div>
  )
}
