"use client"
import Image from 'next/image'
import { useContext } from 'react'
import { AppContext } from '../container'






export default function Index() {
//  let texts= document.getElementsByClassName("text1")

//   for (let index = 0; index <= texts.length; index++) {
   
//     setInterval(()=>{
// texts[index]?.setAttribute("class", "block")
//     },100)
    
//   }


  const {appState,setAppState}=useContext(AppContext)
  return (
    <>
    <div className='w-[100%] min-h-screen  font-rubik  bg-primary-blue  mt-14 pt-14'>




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

    </div>


    </>
  )
}