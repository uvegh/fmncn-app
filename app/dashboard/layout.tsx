import { AppProps } from 'next/app'
import React, { Children } from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Image from 'next/image'

function Layout({children}:{
    
 children:   React.ReactNode}) {
  return (

    <>
    
    
       
        
   
 
    <section className='flex  max-lg:mt-10'>

       <div className='w-[6%] min-h-screen bg-primary-blue z-20 hidden lg:block top-0 left-0 fixed'>
<ul className=' ms-5 '>
    <li>
    <Link href="/home" className="flex items-center">
            <Image
              width="100"
              height="96"
              src="/logo1.svg"
              className="  max-md:w-[30%] max-md:h-[30%] "
              alt=" Logo"
            />
          </Link>
    </li>
    <li className=" mt-10"> 
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
   <div className='w-[94%] max-lg:w-full ms-auto'>
   <Navbar/>
       
   {children}
   </div>
   </section>

   
    </>

  )
}

export default Layout