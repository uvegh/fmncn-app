"use client"
import Image from 'next/image'
import { useContext } from 'react'
import { AppContext } from '../container'
import Header from '../components/Header'






export default function Page() {



  const {appState,setAppState}=useContext(AppContext)
  return (
    <>
    <Header/>
    <div className='w-[100%] min-h-screen   font-rubik  bg-primary-blue  mt-14 pt-14'>




<h1 className='text-white text-6xl text-center mx-auto my-auto font-extrabold max-md:text-2xl mt-[10rem]'>
Revolutionize your meeting <br /> notes with FMCN 

</h1>

<div className="text-container text-white text-center font-semibold text-[1.3rem] mt-7 min-w-full font-poppins">
  <div className="text-slide-up flex flex-col relative mx-auto min-w-full">
<span className='text1 '>Generates structural meeting notes</span>
<span className='text1'>Every second is recorded</span>
<span className='text1'>Produces accurate transcriptions</span>
</div   >
</div>
<div className='text-center mt-7'>
<button
              type="button"

              onClick={()=>{
             
                 
       
                  setAppState({
                    ...appState,showModal:true

                  })
              }}
              className="text-white mt-5 lg:font-normal lg: text-2xl hover:bg-primary-success bg-primary-success focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold font-rubik  px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-[1.3rem] "
            >
              Get started
            </button>
</div>

<section className='bg-cover bg-landingBg w-[100%] lg: min-h-[200px] h-[100%] mt-[20%] '>


</section>
<div className=' bg-white-200 pt-10 pb-10'>
<section className=' grid lg:grid-cols-2   w-[80%]  mx-auto '>
<div className='text-primary-blue mt-5'>
  <h1 className='font-bold text-[2.6rem] '>Real time recording.</h1>
  <p className='leading-9 text-3xl font-normal w-[70%] mt-10'>
  Because every word matters,  capture meetings in real-time, ensuring no detail is missed with our AI Audio Recorder - Confluence
  </p>
  <div className=' '>
<button
              type="button"

              onClick={()=>{
             
                 
       
                  setAppState({
                    ...appState,showModal:true

                  })
              }}
              className="text-white mt-5 lg:font-semibold lg: text-2xl hover:bg-primary-success bg-primary-success focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold font-rubik  px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-[1.3rem] "
            >
              Get started
            </button>
</div>
</div>

<div className=' mx-auto'>
  <Image src="/images/illustration1.svg" width={630} height={483} alt="illustratio"/>
</div>
</section>
</div>


<div className=' bg-white pt-10 pb-10'>
<section className=' grid lg:grid-cols-2 max-lg:grid-cols-2  max-sm:grid-cols-1 w-[80%]  mx-auto '>


<div className=''>
  <Image src="/images/illustration2.svg" width={630} height={483} alt="illustration"/>
</div>

<div className='text-primary-blue mt-5 w-[70%] mx-auto'>
  <h1 className='font-bold text-[2.6rem] '>Easy retrieval.</h1>
  <p className='leading-9 text-3xl font-normal  mt-10'>
  Have access to previous meeting recordings. All in one place and sorted by date.
  </p>
  <div className=' '>
<button
              type="button"

              onClick={()=>{
             
                 
       
                  setAppState({
                    ...appState,showModal:true

                  })
              }}
              className="text-white mt-5 lg:font-semibold lg: text-2xl hover:bg-primary-success bg-primary-success focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold font-rubik  px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-[1.3rem] "
            >
              Get started
            </button>
</div>
</div>
</section>
</div>

<div className=' bg-white-200 pt-10 pb-10'>
<section className=' grid lg:grid-cols-2   w-[73%]  mx-auto '>
<div className='text-primary-blue mt-5'>
  <h1 className='font-bold text-[2.6rem] leading-10'>Instant structured meeting notes.</h1>
  <p className='leading-9 text-3xl font-normal w-[70%] mt-10'>
  Access to auto-generated structured notes after each meeting. If you need the unstructured notes, we have those too.
  </p>
  <div className=' '>
<button
              type="button"

              onClick={()=>{
             
                 
       
                  setAppState({
                    ...appState,showModal:true

                  })
              }}
              className="text-white mt-5 lg:font-semibold lg: text-2xl hover:bg-primary-success bg-primary-success focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold font-rubik  px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-[1.3rem] "
            >
              Get started
            </button>
</div>
</div>

<div className=' mx-auto'>
  <Image src="/images/illustration3.svg" width={630} height={483} alt="illustratio"/>
</div>
</section>
</div>

    </div>


    </>
  )
}