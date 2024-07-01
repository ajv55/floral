'use client';
import { motion } from 'framer-motion';
import cup from '@/public/cup.svg';
import Image from 'next/image';

const EnticingSection = () => {
  return (
    <div className="p-8 bg-gradient-to-b from-[#FFEAE3] to-pink-700">
      <h2 className="text-4xl font-bold text-[#121481] mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-white rounded-lg hover:shadow-[#121481] hover:shadow-md shadow-lg p-6 border border-rose-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3 className="text-lg font-semibold text-rose-800 mb-2">Fresh Ingredients</h3>
          <p className="text-rose-600">
            Our cupcakes are made with the freshest ingredients to ensure the best quality and taste.
          </p>
        </motion.div>
        <motion.div
          className="bg-white rounded-lg hover:shadow-[#121481] hover:shadow-md shadow-lg p-6 border border-rose-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3 className="text-lg font-semibold text-rose-700 mb-2">Beautiful Arrangements</h3>
          <p className="text-rose-600">
            Our floral arrangements are crafted by skilled florists to create stunning displays.
          </p>
        </motion.div>
        <motion.div
          className="bg-white rounded-lg hover:shadow-[#121481] hover:shadow-md shadow-lg p-6 border border-rose-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3 className="text-lg font-semibold text-rose-700 mb-2">Customer Satisfaction</h3>
          <p className="text-rose-600">
            We prioritize customer satisfaction and strive to deliver the best service.
          </p>
        </motion.div>
        <motion.div
          className="bg-white rounded-lg hover:shadow-[#121481] hover:shadow-md shadow-lg p-6 border border-rose-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3 className="text-lg font-semibold text-rose-700 mb-2">Fast Delivery</h3>
          <p className="text-rose-600">
            We offer fast and reliable delivery to ensure your orders arrive on time.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default EnticingSection;
