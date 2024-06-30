'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const cupcakeData = [
  { id: '1', name: 'Vanilla Cupcake', price: 2.5, quantity: 50 },
  { id: '2', name: 'Chocolate Cupcake', price: 3.0, quantity: 60 },
  // ... add more cupcake data here
];

const CupcakeList = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [cupcakes, setCupcakes] = useState([]);
  const filteredCupcakes = cupcakeData.filter(cupcake =>
    cupcake.name.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
    <div className="p-8 bg-pink-100">
      <h2 className="text-2xl font-bold text-pink-500 mb-6">Cupcake List</h2>
      <input
        type="text"
        placeholder="Search for cupcakes..."
        className="mb-4 p-2 rounded border-2 border-pink-300"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCupcakes.map(cupcake => (
          <motion.div
            key={cupcake.id}
            className="bg-white rounded-lg shadow-md p-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-lg font-semibold text-pink-500">{cupcake.name}</h3>
            <p className="mt-2 text-amber-500">Price: ${cupcake.price}</p>
            <p className="mt-2 text-amber-500">Quantity: {cupcake.quantity}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CupcakeList;
