import React from 'react';
import './TrainingStyles.css';
import  { Link } from 'react-router-dom';


//****IMAGES */ 
import Moon from '../assets/moon.jpg';
import Pod from '../assets/pod.jpg';

const Training = () => {
  return (
    <div className='training'>
        <div className='left'>
            <h1>Training</h1>
            <p>Veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim </p>
            <Link to='/contact'><button className='btn'>Contact</button></Link> 
        </div>
        <div className='right'>
            <div className='image-container'>
                <div className='image-stack top'>
                    <img src={Moon} className='img1' alt='Moon'/>
                </div>
                <div className='image-stack bottom'>
                    <img src={Pod} className='img2' alt='Moon'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Training
