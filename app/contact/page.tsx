import React from 'react'
import Navbar from '../component/navbar';
import Contacts from '.';
import Footer from '../component/footer';

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className='content-contacts'>
      <Contacts/>
    </div>
    <Footer/>
    </>
  )
}

export default Contact;