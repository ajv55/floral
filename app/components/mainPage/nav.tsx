import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <div className='w-full border-b z-30 border-zinc-950 fixed bg-white flex justify-between items-center p-2'>
        <h1 className='text-3xl font-bold'>Logo Goes Here</h1>
        <nav className='w-[45%]  text-xl flex justify-evenly items-center'>
            <Link className='hover:underline hover:text-red-300 underline-offset-4 hover:text-2xl' href='/'>Home</Link>
            <Link className='hover:underline hover:text-red-300 underline-offset-4 hover:text-2xl' href='/'>About</Link>
            <Link className='hover:underline hover:text-red-300 underline-offset-4 hover:text-2xl' href='/'>Contact</Link>
        </nav>
        <button className='w-[14%] text-2xl px-2.5 text-white rounded-2xl py-3 text-center bg-gradient-to-br from-red-900 via-pink-700 to-red-400 hover:from-red-400 hover:via-pink-600 hover:to-pink-800'>Place Order</button>
    </div>
  )
}
