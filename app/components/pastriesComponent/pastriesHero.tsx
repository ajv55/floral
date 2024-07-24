'use client';
import { motion } from 'framer-motion';

const PastriesHeroSection = () => {
  return (
    <div className='bg-gradient-to-br from-primary-dark  to-primary-pink text-white py-20'>
      <motion.div
        className="container mx-auto text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-[#FFF5E1] mt-14 mb-4">Welcome to Pastry Paradise</h1>
        <p className="text-xl mb-8">
          Indulge in our delectable pastries, freshly baked and full of flavor.
        </p>
        <button className="bg-[#FFF5E1] hover:bg-[#ffd6a5] text-yellow-800 py-2 px-4 rounded-lg font-bold">
          Browse Pastries
        </button>
      </motion.div>
    </div>
  );
};

export default PastriesHeroSection;
