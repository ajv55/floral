'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addItem } from '@/app/slices/cartSlice';

const CupcakeList = () => {

    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [cupcakes, setCakecups] = useState([]);
    const dispatch = useDispatch();

    const fetchCupcakes = async () => {
        await axios.get('/api/getCupcakes').then((res: any) => {
            if(res.status === 201){
                setCakecups(res?.data)
            }
        })
    }

    useEffect(() => {
        fetchCupcakes();
    }, [])

    

    const flavors = cupcakes.map((product: any) => product?.name);
    
    const filteredProducts = cupcakes.filter((product: any) => {
      return (
        product?.name.toLowerCase().includes(search.toLowerCase()) &&
        (filter ? product?.name === filter : true)
      );
    });

    console.log(filteredProducts)

  return (
    <div className="min-h-screen bg-[#ffeae3] flex flex-col items-center py-10">
      <div className="w-full max-w-7xl px-4 mb-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <span>{cupcakes.length} Cupcakes</span>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded-lg"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full md:w-1/4 p-2 border border-gray-300 rounded-lg text-[#121481] bg-[#ffeae3] hover:bg-pink-200 focus:ring-pink-500 focus:border-pink-500"
        >
          <option value="">All</option>
          {flavors.map((flavor, index) => (
            <option key={index} value={flavor}>{flavor}</option>
          ))}
        </select>
      </div>
      <div className="w-full max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product: any, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg hover:cursor-pointer hover:shadow-[#121481] hover:shadow-md shadow-lg overflow-hidden transform hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src={product.img} alt={product.name} width={200} height={200} className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="text-xs font-semibold text-white bg-pink-500 px-2 py-1 rounded-full">{product.tag}</span>
              <h2 className="text-lg font-semibold text-[#121481] mt-2">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-pink-500 font-bold">${product?.price?.toFixed(2)}</p>
              <button onClick={() => dispatch(addItem(product))} className="bg-pink-500 text-white px-3 py-1 mt-2 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500">
                    Add to Cart
             </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CupcakeList;
