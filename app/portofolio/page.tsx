
import React from 'react'
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import PortofolioFull from './portofolioFull';
const Portofolios = () => {
  return (
    <>
      <Navbar/>
      <div className="cts h-screen">
        <PortofolioFull/>
      </div>
      <Footer/>
      
    </>
  )
}

export default Portofolios