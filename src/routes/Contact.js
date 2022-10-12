import React from 'react'
import Footer from '../components/Footer'
import Heroimage from '../components/Heroimage'
import Form from '../components/Form'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <Heroimage heading='CONTACT' text='Contact GLX Travel.'/>
        <Form />
        <Footer />

      
    </div>
  )
}

export default Contact
