'use client';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity, selectCartItems, selectTotalAmount, setIsCartOpen, resetCart } from '../../slices/cartSlice';
import { motion, AnimatePresence } from 'framer-motion';
import { RootState } from '@/app/store';
import axios from 'axios';
import toast from 'react-hot-toast';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const isCartOpen = useSelector((state: RootState) => state.cart.isCartOpen);

  const [isCheckoutFormVisible, setIsCheckoutFormVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleQuantityChange = (item: any, newQuantity: string) => {
    // Allow user to input a number or clear the input
    if (newQuantity === '' || (!isNaN(Number(newQuantity)) && Number(newQuantity) >= 0)) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity === '' ? 0 : Number(newQuantity) }));
    }
  };

  const handleRemove = (id: string) => {
    dispatch(removeItem(id));
  };

  const handleCloseCart = () => {
    dispatch(setIsCartOpen(false));
    setIsCheckoutFormVisible(false)
  };

  const handleCheckoutClick = () => {
    setIsCheckoutFormVisible(!isCheckoutFormVisible);
  };

  const postOrder = async () => {
    await axios.post('/api/postOrder', {cartItems, totalAmount, buyer: { name, email, phone }}).then((res) => {
        console.log(res)
        if(res.status === 201){
          toast.success('Order Placed! 🧁');
          handleCloseCart();
          dispatch(resetCart()); 
        }
    })
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 top-20 w-full h-full flex items-start justify-end bg-transparent bg-opacity-50 z-50">
          <motion.div
            className="bg-white rounded-lg p-6 w-full max-w-lg"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-[#121481]">Your Cart</h2>
              <button className="text-gray-600 focus:outline-none" onClick={handleCloseCart}>
                Close
              </button>
            </div>
            {cartItems.length === 0 ? (
              <p className="text-gray-600">Your cart is empty</p>
            ) : (
              <>
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id} className="mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">{item.name}</span>
                        <span className="text-pink-500 font-bold">${(item.price * item.quantity).toFixed(2)  || 0}</span>
                        {/* Quantity selection */}
                        <div className="flex items-center mt-2">
                          <label className="mr-2">Quantity:</label>
                          <input
                            type="number"
                            value={item.quantity} // Bind to item's quantity in Redux store
                            onChange={(e) => {
                              handleQuantityChange(item, e.target.value);
                            }}
                            className="border border-gray-300 rounded-lg p-1 w-16 text-center"
                          />
                        </div>
                        <button
                          className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                          onClick={() => handleRemove(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-[#121481]">Total: ${totalAmount.toFixed(2)  || 0}</h3>
                  <button onClick={handleCheckoutClick} className="bg-pink-500 text-white px-4 py-2 rounded mt-4 hover:bg-pink-600">
                    Checkout
                  </button>
                </div>
              </>
            )}
           {isCheckoutFormVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50 z-50"
          initial={{ opacity: 0, x:0 }}
          animate={{ opacity: 1, x: -550 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-lg p-6 w-full max-w-md"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <form onSubmit={(e) => { e.preventDefault(); postOrder(); }}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 w-full"
                  required
                />
              </div>
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600">
                Submit Order
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Cart;

