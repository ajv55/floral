import React from 'react';

const How = () => {
  return (
    <section style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/floral.jpg")'}} className="bg-white bg-cover bg-center py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-7xl font-bold text-center  bg-gradient-to-br from-amber-400 via-pink-300 to-fuchsia-400 bg-clip-text text-transparent mb-28">How to Order</h2>
        <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
          {/* Step 1 */}
          <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-pink-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold ml-4">Visit Our Online Store</h3>
            </div>
            <p className="text-gray-700">
              Browse our wide selection of cupcakes, pastries, and flowers.
              Easy navigation and detailed descriptions make it simple to choose your favorites.
            </p>
          </div>
          {/* Step 2 */}
          <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-pink-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold ml-4">Customize Your Order</h3>
            </div>
            <p className="text-gray-700">
              Add personal touches with our customization options. Perfect for birthdays, weddings, and corporate events.
            </p>
          </div>
          {/* Step 3 */}
          <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-pink-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold ml-4">Enjoy Convenient Pickup or Delivery</h3>
            </div>
            <p className="text-gray-700">
              Choose a pickup time that suits you or opt for delivery to your doorstep. Fast, reliable, and always fresh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;

