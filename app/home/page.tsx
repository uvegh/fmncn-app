"use client"
import Image from 'next/image'
import { useContext } from 'react'
import { AppContext } from '../container'






export default function Page() {




  const {appState,setAppState}=useContext(AppContext)
  return (
    <>
    <div className='w-[100%] min-h-screen  font-rubik font-sans bg-primary-blue  mt-14 pt-14'>




<h1 className='text-white text-6xl text-center mx-auto my-auto font-extrabold max-md:text-2xl'>
Revolutionize your meeting <br /> notes with FMCN 

</h1>

<div className='text-center'>
<button
              type="button"

              onClick={()=>{
             
                 
       
                  setAppState({
                    ...appState,showModal:true

                  })
              }}
              className="text-white mt-5 hover:bg-primary-success bg-primary-success focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold font-rubik  px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-[1.2rem] text-xl"
            >
              Get started
            </button>
</div>

<section className='bg-cover bg-landingBg w-[100%] lg: min-h-[200px] h-[100%] mt-[20%] '>


</section>

    </div>


    </>
  )
}