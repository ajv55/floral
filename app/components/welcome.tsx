'use client';
import { alex_brush } from "../font/font"

export default function Welcome() {
  return (
    <div className='w-full mt-20  h-[14rem] flex justify-center items-center'>
        <p className='text-3xl w-[85%] font-light tracking-wide text-center text-balance'>Welcome to <span className={`${alex_brush.className} text-6xl font-bold bg-gradient-to-tr from-[#121481] via-rose-400 to-rose-200 bg-clip-text text-transparent`}>Sweet Bliss Bakery</span> &#45; your one-stop destination for <span className="font-bold text-[#f19c7d]">heavenly cupcakes</span>, <span className="font-bold text-[#121481]">delightful pastries</span>, and <span className="font-bold text-[#f19c7d]">stunning floral arrangements</span>. Whether you&#39;re celebrating a special occasion or simply <span className="font-bold text-[#121481]">treating yourself</span>, we&#39;ve got the perfect blend of <span className="font-bold text-[#f19c7d]">sweetness</span> and <span className="font-bold text-[#121481]">elegance</span> to make your day extraordinary.</p>
    </div>
  )
}
