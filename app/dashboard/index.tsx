"use client"
import React, { useState } from 'react'
import Recorder from '../components/Recorder'
import ConsentScreen from '../components/Modal/ConsentScreen'

function Index() {
 
  const [showConsent,setShowConsent]=useState<boolean>(true)
  return (
    
    <>
    <div className='bg-red-300 h-screen' >
      <section className=' mt-10 pt-10 mx-auto'>
   <ConsentScreen
   isOpen={showConsent}
   setIsOpen={setShowConsent}
   />    
      <Recorder/> 
      </section>
    
   
      
      
          </div>
    </>
    
  )
}

export default Index