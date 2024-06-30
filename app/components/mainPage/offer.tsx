import React from 'react'

export default function Offer() {
  return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto">
            <h2 className="lg:text-6xl font-extrabold bg-gradient-to-br from-amber-500 via-pink-400 to-pink-600 bg-clip-text text-transparent text-4xl">
            Special Offers
            </h2>
            <div className=' w-full flex justify-between items-center'>
                <div className='w-[47%] h-[18rem] mt-5 flex gap-12 flex-col justify-start items-start p-2'>
                   <h3 className="text-3xl font-bold text-gray-800">Join Our Mailing List</h3>
                   <p className="mt-2 text-lg text-left text-balance text-gray-600">Sign up today and get 10% off your first order. Be the first to know about exclusive deals, new arrivals, and seasonal specials.</p>
                   <form className="mt-4 flex  w-full justify-center items-center" >
                    <input
                        type="email"
                        required
                        className="w-[75%] rounded-lg border border-gray-300 px-2.5 py-2 text-gray-700 focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Enter your email"
                    />
                    <button
                        type="submit"
                        className="ml-4 text-center text-lg w-[20%] rounded-md bg-gradient-to-br from-amber-300 via-pink-400 to-pink-600 px-6 py-2 text-white font-medium hover:bg-gradient-to-tr hover:from-amber-300 hover:via-pink-400 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2"
                    >
                        Sign Up
                    </button>
                </form>
                </div>
                <div className='w-[47%] h-[18rem] flex gap-12  flex-col justify-end items-end p-2'>
                <h3 className="text-3xl font-bold text-gray-800">Limited Time Offer</h3>
                <p className="mt-2 text-lg text-right text-balance text-gray-600">Get a free mini floral arrangement with every order over $50. Perfect for adding a touch of beauty to your sweet treats.</p>
                <div className="mt-4">
                <a href="/shop" className="inline-block rounded-md bg-gradient-to-br from-amber-300 via-pink-400 to-pink-600 px-6 py-3 text-white font-medium hover:bg-gradient-to-tr hover:from-amber-300 hover:via-pink-400 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2">Shop Now</a>
                </div>
                </div>
                
            </div>
        </div>
        </div>
  )
}
