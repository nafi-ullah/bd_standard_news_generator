import React, { useState } from 'react';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Result from './components/Result';
import Loading from './assets/loading.gif';

const Homepage = () => {
    const [showHeadlines, setShowHeadlines] = useState(false);
    const [showGif, setShowGif] = useState(false);


  return (
    <>
    <Navbar />
    <div className='w-full min-h-min flex'>
         <div className='w-1/2'>
         <Form setShowHeadlines={setShowHeadlines} setShowGif={setShowGif}/>

         </div>
         <div className='w-1/2'>
            {showGif &&  <div className='w-full h-full ml-[400px] flex flex-col item-center justify-center m-auto'>
            <div className='w-12 ml-7'><img src={Loading} alt='loading'/></div>
                <div>প্রক্রিয়াকরন চলছে </div>
            </div>}

            {showHeadlines && <Result />}


           
            
         

         </div>

    </div>
    
    </>
  )
}

export default Homepage