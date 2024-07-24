import React from 'react'

export default function Footer() {
  return (
    <footer className=" bg-gradient-to-t from-primary-dark via-pink-600 to-pink-700 text-white py-10">
      <div className="max-w-8xl  mx-auto px-4">
        <div className="flex  flex-col md:flex-row justify-between items-center">
          <div className="mb-6  w-[50%] md:mb-0">
            <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
            <p className="text-gray-300">Have questions or need assistance with your order? Our friendly customer service team is here to help!</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <p>Call Us: <a href="tel:1-800-SWEETBLISS" className=" text-soft-lilac">1-800-SWEETBLISS</a></p>
              <p>Email: <a href="mailto:support@sweetblissbakery.com" className=" text-soft-lilac">support@sweetblissbakery.com</a></p>
              <p>Visit Us: 123 Baker Street, Your City, ST 12345</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Follow Us on Social Media</h3>
              <div className="flex space-x-4 mt-2">
                <a href="https://instagram.com/sweetblissbakery" target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-indigo-100">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2A5.76 5.76 0 002 7.75v8.5A5.76 5.76 0 007.75 22h8.5A5.76 5.76 0 0022 16.25v-8.5A5.76 5.76 0 0016.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0120 7.75v8.5A3.75 3.75 0 0116.25 20h-8.5A3.75 3.75 0 014 16.25v-8.5A3.75 3.75 0 017.75 4zM18 7a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                  </svg>
                </a>
                <a href="https://facebook.com/sweetblissbakery" target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-indigo-100">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.524-4.477-10-10-10S2 6.476 2 12c0 4.991 3.657 9.128 8.437 9.878v-7H7.898v-2.878h2.54V9.653c0-2.523 1.493-3.897 3.787-3.897 1.1 0 2.244.198 2.244.198v2.47h-1.265c-1.246 0-1.634.774-1.634 1.564v1.879h2.773l-.443 2.878h-2.33v7C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="https://pinterest.com/sweetblissbakery" target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-indigo-100">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.486 2 2 6.486 2 12c0 4.307 2.791 8 6.653 9.325-.029-.809-.056-2.048.012-2.933.108-1.455.718-3.08 1.474-4.127-1.058-.043-2.632-.522-2.632-2.325 0-2.122 1.606-3.724 3.725-3.724 2.12 0 3.724 1.602 3.724 3.724 0 2.123-1.605 3.724-3.724 3.724-.542 0-.986-.045-1.418-.13-.113.619-.254 1.199-.403 1.752-.179.678-.396 1.39-.662 2.122C8.918 20.711 8.289 21.957 7.334 22.88 8.674 23.446 10.301 24 12 24c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 2c4.411 0 8 3.589 8 8s-3.589 8-8 8c-.968 0-1.91-.152-2.8-.431a6.823 6.823 0 001.384-1.64c.347-.521.643-1.14.879-1.847.104-.295.204-.598.3-.91.308.064.625.098.946.098 2.48 0 4.5-2.019 4.5-4.5s-2.019-4.5-4.5-4.5S7.5 9.519 7.5 12c0 .991.288 1.91.784 2.698.275.423.665.784 1.16.977.161-.37.312-.781.444-1.236.148-.514.291-1.046.408-1.614.16-.784.306-1.654.535-2.336.16-.484.383-.923.649-1.288A4.932 4.932 0 0012 10c2.176 0 3.724 1.602 3.724 3.724 0 2.121-1.548 3.723-3.724 3.723-1.353 0-2.436-.68-3.106-1.723-.189-.285-.371-.593-.545-.919a6.97 6.97 0 01-.227-.542 8.05 8.05 0 01-.187-.552C8.51 12.35 8.5 11.594 8.5 10.84 8.5 6.489 10.99 4 12 4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-gray-300">
          &copy; {new Date().getFullYear()} Sweet Bliss Bakery. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
