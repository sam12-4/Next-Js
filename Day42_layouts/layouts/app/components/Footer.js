import React from 'react'

const Footer = () => {
  return (
    <div className='absolute bottom-0 w-screen'>
      <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-8 p-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0">
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0">
              <h4 className="text-lg font-bold mb-4">Resources</h4>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Developers
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0">
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4">
              <h4 className="text-lg font-bold mb-4">Subscribe</h4>
              <p className="mb-4">
                Subscribe to our newsletter to get the latest updates.
              </p>
              <form>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white text-gray-800 py-2 px-4 rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-pink-600 text-white py-2 px-4 rounded-r-md hover:bg-pink-700 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
