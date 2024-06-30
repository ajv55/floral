'use client';
import { motion } from 'framer-motion';
import cup from '@/public/cup.svg';
import Image from 'next/image';

const EnticingSection = () => {
  return (
    <div  className="p-8 bg-amber-100">
      <h2 className="text-2xl font-bold text-amber-500 mb-6">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="bg-white rounded-lg shadow-md p-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3 className="text-lg font-semibold text-amber-500">Fresh Ingredients</h3>
          <p className="mt-2 text-pink-500">
            Our cupcakes are made with the freshest ingredients to ensure the best quality and taste.
          </p>
        </motion.div>
        <motion.div
          className="bg-white rounded-lg shadow-md p-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3 className="text-lg font-semibold text-amber-500">Beautiful Arrangements</h3>
          <p className="mt-2 text-pink-500">
            Our floral arrangements are crafted by skilled florists to create stunning displays.
          </p>
        </motion.div>
        <motion.div
          className="bg-white rounded-lg shadow-md p-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3 className="text-lg font-semibold text-amber-500">Customer Satisfaction</h3>
          <p className="mt-2 text-pink-500">
            We prioritize customer satisfaction and strive to deliver the best service.
          </p>
        </motion.div>
        <motion.div
          className="bg-white rounded-lg shadow-md p-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3 className="text-lg font-semibold text-amber-500">Fast Delivery</h3>
          <p className="mt-2 text-pink-500">
            We offer fast and reliable delivery to ensure your orders arrive on time.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default EnticingSection;
