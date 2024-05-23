'use client';
import { alex_brush } from "../font/font"

export default function Welcome() {
  return (
    <div className='w-full mt-20 flex justify-start items-center'>
        <p className='text-3xl font-light tracking-wide text-center text-balance'>Welcome to <span className={`${alex_brush.className} text-6xl font-bold bg-gradient-to-tr from-fuchsia-700 via-fuchsia-400 to-fuchsia-200 bg-clip-text text-transparent`}>Sweet Bliss Bakery</span> &#45; your one-stop destination for <span className="font-bold">heavenly cupcakes</span>, <span className="font-bold">delightful pastries</span>, and <span className="font-bold">stunning floral arrangements</span>. Whether you&#39;re celebrating a special occasion or simply <span className="font-bold">treating yourself</span>, we&#39;ve got the perfect blend of <span className="font-bold">sweetness</span> and <span className="font-bold">elegance</span> to make your day extraordinary.</p>
    </div>
  )
}
