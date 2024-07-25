import React from 'react'
import Navigation from '../components/mainPage/nav'
import Footer from '../components/mainPage/footer'

export default function Page() {
  return (
    <section className="bg-primary-light">
        <Navigation />
  <div className="w-full mx-auto ">
    <div className='w-full flex flex-col  justify-center items-center h-[23rem]'>
      <h2 className="text-6xl font-bold mt-8 text-primary-dark mb-8 text-center">Contact Us</h2>
      <p className="text-xl font-extrabold text-primary-dark  mb-12 text-center">We&#39;re here to help and answer any question you might have. We look forward to hearing from you!</p>
    </div>
    <div className="flex flex-wrap bg-gradient-to-t from-pink-700 to-primary-light  justify-between">
      {/* <!-- Contact Information --> */}
      <div className="w-full flex flex-col justify-center items-center md:w-1/2 lg:w-1/2 mb-12 md:mb-0">
        <h3 className="text-6xl font-bold text-primary-dark mb-4">Get in Touch</h3>
        <p className="text-xl text-primary-light mb-2"><strong>Phone:</strong> <a href="tel:+1234567890" className="text-primary-pink">+1 (234) 567-890</a></p>
        <p className="text-xl text-primary-light mb-2"><strong>Email:</strong> <a href="mailto:contact@sweetblissbakery.com" className="text-primary-pink">contact@sweetblissbakery.com</a></p>
        <p className="text-xl text-primary-light mb-2"><strong>Address:</strong> 123 Bakery Lane, Sweet City, CA 98765</p>
      </div>
      {/* <!-- Contact Form --> */}
      <div className="w-full md:w-1/2 lg:w-1/2 bg-primary-light ring-2 ring-primary-dark shadow-lg rounded-lg p-8">
            <h3 className="text-4xl text-center font-bold text-primary-dark mb-6">Send Us a Message</h3>
            <form action="#" method="POST">
                <div className="mb-6">
                <label htmlFor="name" className="block text-primary-dark text-lg font-semibold mb-2">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-pink transition duration-300"
                    placeholder="Your Full Name"
                    required
                />
                </div>
                <div className="mb-6">
                <label htmlFor="email" className="block text-primary-dark text-lg font-semibold mb-2">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-pink transition duration-300"
                    placeholder="you@example.com"
                    required
                />
                </div>
                <div className="mb-6">
                <label htmlFor="message" className="block text-primary-dark text-lg font-semibold mb-2">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-pink transition duration-300"
                    placeholder="Your message"
                    required
                ></textarea>
                </div>
                <button
                type="submit"
                className="bg-primary-pink text-primary-dark font-bold py-2 px-4 rounded-lg hover:bg-primary-dark hover:text-primary-light transition duration-300"
                >
                Send Message
                </button>
            </form>
            </div>



    </div>
  </div>
  <Footer />
</section>

  )
}
