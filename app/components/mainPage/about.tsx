'use client';
import { motion } from 'framer-motion';
import Navigation from './nav';
import Footer from './footer';
import Gorumet from './motion/gorumet';
import Pastries from './motion/pastries';
import Floral from './motion/floral';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
        <Navigation />
      <motion.div
        className="w-full "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Section */}
        <section className="text-center bg-gradient-to-br p-3  from-primary-pink to-primary-dark flex flex-col justify-end items-center h-[16rem] mb-12">
          <h1 className="text-7xl font-bold text-primary-light  mb-4">About Sweet Bliss Bakery</h1>
          <p className="text-xl text-primary-pink mb-6">
            Discover the sweet journey of our bakery, where every treat is crafted with love and passion.
          </p>
        </section>

        {/* Our Story Section */}
        <section className="mb-12 lg:max-w-4xl w-full mx-auto">
          <h2 className="text-6xl text-center lg:text-left font-bold bg-gradient-to-br from-primary-pink to-primary-dark bg-clip-text text-transparent  mb-4">Our Story</h2>
          <p className="text-xl text-center lg:text-left lg:p-0 p-1 text-gray-600 leading-relaxed">
            Founded in 2020, Sweet Bliss Bakery began as a small family-owned shop with a big dream: to bring joy to our community through the magic of baked goods. Our passion for baking and our commitment to quality have allowed us to grow, but our core values remain the same. We believe in using the finest ingredients, traditional recipes, and a lot of love in everything we create.
          </p>
        </section>

        {/* Our Values Section  */}
        <section className=" w-full flex lg:flex-row flex-col ">
            <div className='lg:w-1/2 w-full h-[26rem] rounded-r-lg bg-center bg-cover' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("https://data.thefeedfeed.com/recommended/post_3885585.jpeg")'}}>
            </div>
            <div className='lg:w-1/2 w-full flex p-4 flex-col justify-center items-center gap-2'>
            <h2 className="text-5xl font-bold text-primary-dark mb-4">Our Values</h2>
            <ul className="text-lg text-primary-dark leading-relaxed list-disc pl-5 space-y-4">
                <li>
                <strong className="text-primary-pink text-xl">Quality:</strong> We use only the best ingredients to ensure that every bite is a taste of perfection.
                </li>
                <li>
                <strong className="text-primary-pink text-xl">Community:</strong> We are proud to be part of our local community, supporting local farmers and businesses.
                </li>
                <li>
                <strong className="text-primary-pink text-xl ">Passion:</strong> Baking is our passion, and we love sharing that joy with you through our delicious creations.
                </li>
                <li>
                <strong className="text-primary-pink text-xl">Innovation:</strong> While we honor traditional recipes, we also love to innovate and bring you exciting new flavors.
                </li>
            </ul>
            </div>
            </section>


        {/* Our Offerings Section */}
        <section className="mb-12 flex lg:flex-row flex-col justify-center items-center">
          <div className='lg:w-1/2 w-full flex flex-col justify-center items-center p-4'>
          <h2 className="text-5xl font-bold text-primary-dark mb-4">Our Offerings</h2>
            <p className="text-xl text-primary-dark leading-relaxed">
                At Sweet Bliss Bakery, we offer a wide range of baked goods, including:
            </p>
            <ul className="text-lg text-primary-dark leading-relaxed list-disc pl-5 mt-4 space-y-2">
                <li><span className="text-primary-pink font-semibold">Artisan Bread:</span> Freshly baked with a variety of flavors.</li>
                <li><span className="text-primary-pink font-semibold">Custom Cakes:</span> Personalized cakes for every occasion.</li>
                <li><span className="text-primary-pink font-semibold">Delectable Pastries:</span> From croissants to danishes, all made with care.</li>
                <li><span className="text-primary-pink font-semibold">Gourmet Cupcakes:</span> Rich flavors and beautiful decorations.</li>
                <li><span className="text-primary-pink font-semibold">Specialty Cookies:</span> Perfectly baked, with a crunch in every bite.</li>
                <li><span className="text-primary-pink font-semibold">And much more!</span> Explore our full range of products.</li>
            </ul>
          </div>
          <div className='lg:w-1/2 w-full h-[26rem] rounded-l-lg bg-center bg-cover' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("https://hips.hearstapps.com/hmg-prod/images/closeup-jpg-1614830517.jpg")'}}>
            </div>
        </section>

        {/* Customer Testimonials Section */}
        <section className='flex flex-col justify-center items-center'>
            <h2 className="text-5xl font-bold text-primary-dark mb-4">Our Products</h2>
            <div className="mt-10 w-[85%] mb-10 grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* <!-- Gourmet Cupcakes --> */}
            <Gorumet />

            {/* <!-- Decadent Pastries --> */}
            <Pastries />

            {/* <!-- Elegant Floral Arrangements --> */}
            <Floral />

        </div>
            </section>

            <Footer />

      </motion.div>
    </div>
  );
};

export default AboutPage;
