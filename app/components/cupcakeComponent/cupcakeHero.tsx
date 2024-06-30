'use client';
import { motion } from "framer-motion";

export default function CupcakeHero() {
  return (
    <div className="bg-pink-300 text-white py-20">
    <motion.div
      className="container mx-auto text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl font-bold mb-4">Welcome to Cupcake & Floral Heaven</h1>
      <p className="text-xl mb-8">Delicious cupcakes and beautiful floral arrangements, just for you.</p>
      <button className="bg-amber-400 text-pink-800 py-2 px-4 rounded-lg font-bold">
        Shop Now
      </button>
    </motion.div>
  </div>
  )
}
