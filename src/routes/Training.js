import React from 'react'
import Footer from '../components/Footer'
import Heroimage from '../components/Heroimage'
import Navbar from '../components/Navbar'
import Train from '../components/Training'

const Training = () => {

return (
    <div>
        <Navbar />
        <Heroimage heading='TRAINING' text='Pre-Flight & In-Flight Training.'/>
        <Train />
        <Footer />
    </div>
  )
}

export default Training