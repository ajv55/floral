import React from 'react'

export default function Why() {
  return (
    <div className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl  font-extrabold text-gray-900 mb-20 text-center">Why Choose Sweet Bliss Bakery?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
                <div className="bg-pink-500 text-white p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zm-4 4a4 4 0 00-4 4v1h8v-1a4 4 0 00-4-4zM20 12c0 2-1.5 4-4 4h-1v1h8v-1c0-1.5-.5-3-2-4h-1z" />
                </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Quality Ingredients</h3>
                <p className="text-gray-600 text-lg">We use only the finest ingredients in our bakery items and flowers to ensure premium quality.</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="bg-pink-500 text-white p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16M4 12h8m-8 5h16" />
                </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Custom Orders</h3>
                <p className="text-gray-600 text-lg ">Personalize your orders to suit your tastes and needs.</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="bg-pink-500 text-white p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h3l2.29 2.29a1 1 0 00.63.21H20a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
                </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Local & Fresh</h3>
                <p className="text-gray-600 text-lg">Supporting local farmers and suppliers, we guarantee freshness in every bite and bloom.</p>
            </div>
            </div>
        </div>
        </div>

  )
}
