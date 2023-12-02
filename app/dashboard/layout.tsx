import { AppProps } from 'next/app'
import React, { Children } from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Image from 'next/image'

function Layout({children}:{
    
 children:   React.ReactNode}) {
  return (

    <>
    <div className='w-full '>
       
        <Navbar/>
       
   
    </div>
    <section className='flex mt-[5.8rem] '>
       <div className='w-[6%] min-h-screen bg-primary-blue '>
<ul className='fixed ms-5 mt-16'>
    
    <li className="">  <Image
              width="61"
              height="14"
              src="/images/dashboard.svg"
              className="  max-md:w-[30%] max-md:h-[30%]  "
              alt=" Logo"
            /></li>
</ul>

   </div>
   <div className='w-[94%]'>
   {children}
   </div>
   </section>

   
    </>

  )
}

export default Layout