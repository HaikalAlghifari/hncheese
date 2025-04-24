import React, { useEffect } from 'react'
import { useState } from 'react'
// import hncheeseLogo from '../assets/hncheeseLogo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scroll, setScroll] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY

      // Ubah background jika scroll lebih dari 10
      setScroll(offset > 10)

      // Deteksi arah scroll
      if (offset > lastScrollY) {
        // Scroll ke bawah => hide navbar
        setIsVisible(false)
      } else {
        // Scroll ke atas => show navbar
        setIsVisible(true)
      }

      setLastScrollY(offset)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])
  return (
    <div className='overflow-x-hidden'>
      <nav className={`
            fixed top-0 left-0 w-full z-50 
            transition-all duration-500
            ${scroll ? 'bg-black' : 'bg-transparent'}
            ${isVisible ? 'translate-y-0' : '-translate-y-full'}
          `}
          >
        <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-3xl font-semibold whitespace-nowrap text-white  font-['badscript'] italic">H.N <span className='text-orange-500'>Cheese</span></span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-orange-700 hover:bg-white hover:text-orange-700 font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 text-center"
            >
              Order Now
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>

          <div
            className={`${isOpen ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'} items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-500 ease-in-out md:opacity-100 backdrop-blur-md text-center rounded-lg mt-2`}
            id="navbar"
          >
            <ul className="flex flex-col font-regular p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a href="#home" className="block py-2 px-3 md:p-0 md:bg-transparent text-orange-500 md:text-white hover:text-white md:hover:text-orange-500">Home</a>
              </li>
              <li>
                <a href="#about" className="block py-2 px-3 md:p-0 text-orange-500  md:text-white hover:text-white md:hover:bg-transparent md:hover:text-orange-500">About</a>
              </li>
              <li>
                <a href="#menu" className="block py-2 px-3 md:p-0 text-orange-500  md:text-white hover:text-white md:hover:bg-transparent md:hover:text-orange-500">Menu</a>
              </li>
              <li>
                <a href="#information" className="block py-2 px-3 md:p-0 text-orange-500  md:text-white hover:text-white md:hover:bg-transparent md:hover:text-orange-500">Info</a>
              </li>
              <li>
                <a href="#gallery" className="block py-2 px-3 md:p-0 text-orange-500  md:text-white hover:text-white md:hover:bg-transparent md:hover:text-orange-500">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="block py-2 px-3 md:p-0 text-orange-500  md:text-white hover:text-white md:hover:bg-transparent md:hover:text-orange-500">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
