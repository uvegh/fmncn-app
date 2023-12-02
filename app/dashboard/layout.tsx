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
    <section className='flex mt-[5.7rem] '>
       <div className='w-[5.9%] min-h-screen bg-primary-blue z-19 '>
<ul className='fixed ms-5 mt-16'>
    
    <li className=""> 
    <Link href="/dashboard">
    <Image
              width="61"
              height="14"
              src="/images/dashboard.svg"
              className="  max-md:w-[30%] max-md:h-[30%]  "
              alt=" dashboard"
            />
    </Link>
    </li>
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