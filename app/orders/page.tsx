'use client';
import axios from 'axios';
import Receipt from '../components/receipt';
import { useEffect, useState } from 'react';
import Navigation from '../components/mainPage/nav';
import Footer from '../components/mainPage/footer';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';



const Page =  () => {
  const [orders, setOrders] = useState([]);

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
    <div className="min-h-screen bg-pink-50 p-8">
      <Navigation />
      <Receipt orders={orders} />
      <Footer/>
    </div>
  );
};

export default Page;
