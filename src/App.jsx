import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
export default function App() {
  return (
   <>
    {/* Navbar */}
    <Navbar />
    {/* Content */}
    <HomePage />
    {/* Footer */}
    <Footer />
   </>
  )
}