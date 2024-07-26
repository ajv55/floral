'use client';
import axios from 'axios';
import Receipt from '../components/receipt';
import { useEffect, useState } from 'react';
import Navigation from '../components/mainPage/nav';
import Footer from '../components/mainPage/footer';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { DiVim } from 'react-icons/di';
import Link from 'next/link';
import { GiCupcake } from 'react-icons/gi';
import { alex_brush } from '../font/font';



const Page =  () => {
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState('orders');

  const {data: session} = useSession();
  const router = useRouter();

  

  const fetchOrders = async () => {
    await axios.get('/api/getOrders').then((res) => {
        if(res.status === 201) {
            setOrders(res?.data)
        }
    })
  };

  useEffect(() => {
    fetchOrders();
  }, [])

  console.log(session)


  console.log(orders)

  return (
    <div className="flex h-screen bg-primary-light">
    <aside className="w-1/4 bg-primary-dark flex flex-col justify-between text-white p-4">
      
    <nav>
    <div className=" flex justify-center mb-8 items-center gap-3 font-bold"><GiCupcake size={30} className='text-primary-light' /><h1 className={`${alex_brush.className} text-4xl text-primary-light mt-2`}>Sweet Bliss Bakery</h1></div>
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <button
              className={`text-xl font-medium w-full text-left ${activeTab === 'orders' ? 'text-primary-pink' : ''}`}
              onClick={() => setActiveTab('orders')}
            >
              Orders
            </button>
          </li>
          <li>
            <button
              className={`text-xl font-medium w-full text-left ${activeTab === 'analytics' ? 'text-primary-pink' : ''}`}
              onClick={() => setActiveTab('analytics')}
            >
              Analytics
            </button>
          </li>
          <li>
            <button
              className={`text-xl font-medium w-full text-left ${activeTab === 'products' ? 'text-primary-pink' : ''}`}
              onClick={() => setActiveTab('products')}
            >
              Products
            </button>
          </li>
        </ul>
      </nav>
      <div className='w-full flex justify-between items-center'>
         <Link href='/'
         className='text-sm'
            >
              Home Page
            </Link>
            
        </div>
    </aside>

    <main className="flex-1 p-8 overflow-scroll">
    
      {activeTab === 'orders' && <Receipt  orders={orders} />}
      {activeTab === 'analytics' && <div>analytics..</div>}
      {activeTab === 'products' && <div>products..</div>}
    </main>
  </div>
  );
};

export default Page;
