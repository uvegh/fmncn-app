"use client"
import Image from 'next/image'
import { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../container'
import Header from '../components/Header'
import { analytics } from '../services'
import { useRouter } from 'next/navigation'
import {useAnimation,motion, AnimatePresence} from 'framer-motion'
import { shakeAndVibrate, shakeAndVibrateX, shakeAndVibrateY } from '../utils'






export default function Page() {
  const {appState,setAppState,isLoggedIn}=useContext(AppContext)
  const controls =useAnimation()
  const route =useRouter()
  const texts=["Generates structural meeting notes",
  "  Every second is recorded",
    "Produces accurate transcriptions"]

const animationDuration=2000
const delayBetweenTexts = 500;

const [index, setIndex] = useState(0);
const textRef=useRef(null)

useEffect(() => {
  const animateText = (index:number) => {
    //@ts-ignore
    textRef.current.innerHTML = texts[index];
     //@ts-ignore
    textRef.current.classList.add("slide-in");

    setTimeout(() => {
       //@ts-ignore
      textRef.current.classList.remove("slide-in");
    }, animationDuration);
  };

  let currentIndex = 0;

  const animateLoop = () => {
    animateText(currentIndex);
    currentIndex = (currentIndex + 1) % texts.length;
    setTimeout(animateLoop, animationDuration + delayBetweenTexts);
  };

  animateLoop();
}, [texts]);


useEffect(()=>{
analytics.page({
  path:'/home',
  title:'homepage viewed',
  
})
},[])

 
  return (
    <>
    <Header/>
    <div className='w-[100%] min-h-screen   font-rubik  bg-primary-blue  mt-14 pt-14'>




<motion.h1
 initial={
  {
    x:-10,opacity:0,scale:0
  }
 }
 whileInView={{
  x:0,opacity:1,scale:1
  
 }}
 viewport={{
  once:true
 }}
 transition={{
  delay:0.2,duration:0.5
 }}
className='text-white text-6xl text-center mx-auto my-auto font-extrabold max-md:text-2xl max-lg:mt-8 lg:mt-[10rem]'>
Revolutionize your meeting <br /> notes with FMCN 

</motion.h1>

<div className=" text-container text-white text-center font-semibold max-lg:text-sm text-[1.3rem] mt-7 min-w-full font-poppins">
<div className="text-slide-up-u flex flex-col relative mx-auto min-w-full">

        <span ref={textRef} key={index} className="text1 animation">
        
        </span>

    </div>
</div>
<motion.div className='text-center '
 initial={
  {
    x:-10,opacity:0,scale:0
  }
 }
 whileInView={{
  x:0,opacity:1,scale:1
  
 }}
 viewport={{
  once:true
 }}
 transition={{
  delay:0.5,duration:0.5
 }}
 
>
<motion.button
              type="button"

              onClick={()=>{
             isLoggedIn?
                 window.location.href="/dashboard":
       
                  setAppState({
                    ...appState,showModal:true

                  })
              }}
              className="text-white mt-5 lg:font-normal lg: text-2xl hover:bg-primary-success bg-primary-success focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold font-rubik  px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-[1.3rem] "
              whileHover="hover"
              variants={shakeAndVibrate}
            >
              Get started
            </motion.button>
</motion.div>

<section className='bg-cover bg-landingBg w-[100%] lg: min-h-[200px] h-[100%] mt-[20%] '>


</section>
<div className=' bg-white-200 max-lg:pt-5 max-lg:pb-5 lg:pt-10 lg:pb-10'>
<section className=' grid md:grid-cols-2   lg:w-[80%] max-lg:w-[90%]  mx-auto '>
<motion.div
initial={
  {
    x:-10,opacity:0
  }
 }
 whileInView={{
  x:0,opacity:1
  
 }}
 viewport={{
  once:true
 }}
 transition={{
  delay:0.2,duration:0.5
 }}
className='text-primary-blue lg:mt-5 max-lg:mt-1 '>
  <h1 className='font-bold  lg:text-[2.6rem] max-lg:text-xl '>Real time recording.</h1>
  <p className='leading-9 max-lg:text-xl lg:text-3xl font-normal max-lg:w-[90%] lg:w-[70%] mt-10 max-lg:mt-5  '>
  Because every word matters,  capture meetings in real-time, ensuring no detail is missed with our AI Audio Recorder - Confluence
  </p>
  <div className=' '>
<motion.button

whileHover="hover"
              variants={shakeAndVibrateY}

              type="button"

              onClick={()=>{
                isLoggedIn?
                    window.location.href="/dashboard":
          
                     setAppState({
                       ...appState,showModal:true
   
                     })
                 }}
              className="text-white max-lg:text-xl mt-5 lg:font-semibold lg: text-2xl hover:bg-primary-success bg-primary-success focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold font-rubik max-lg:px-3 px-6 py-3 max-lg:py-1 max-lg:font-normal text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-[1.3rem] "
            >
              Get started
            </motion.button>
</div>
</motion.div>

<motion.div
initial={
  {
    x:-10,opacity:0
  }
 }
 whileInView={{
  x:0,opacity:1
  
 }}
 viewport={{
  once:true
 }}
 transition={{
  delay:0.4,duration:0.5
 }}
className=' mx-auto max-lg:mt-5 '>
  <Image src="/images/illustration1.svg" width={630} height={483} alt="illustratio"/>
</motion.div>
</section>
</div>


<div className=' bg-white pt-10 pb-10'>
<section

 className=' grid lg:grid-cols-2 max-lg:grid-cols-2  max-sm:grid-cols-1 w-[80%]  mx-auto '>


<motion.div
initial={
  {
    x:-10,opacity:0
  }
 }
 whileInView={{
  x:0,opacity:1
  
 }}
 viewport={{
  once:true
 }}
 transition={{
  delay:0.2,duration:0.5
 }}
 className=''>
  <Image src="/images/illustration2.svg" width={630} height={483} alt="illustration"/>
</motion.div>

<motion.div
initial={
  {
    x:-10,opacity:0
  }
 }
 whileInView={{
  x:0,opacity:1
  
 }}
 viewport={{
  once:true
 }}
 transition={{
  delay:0.4,duration:0.5
 }}
 className='text-primary-blue mt-5 w-[70%] max-lg:w-[90%]  mx-auto '>
  <h1 className=' text-[2.6rem] font-bold  max-lg:text-xl  '>Easy retrieval.</h1>
  <p className='text-3xl  leading-9 max-lg:text-xl  font-normal max-lg:w-[90%] lg:w-[70%] mt-10 max-lg:mt-5'>
  Have access to previous meeting recordings. All in one place and sorted by date.
  </p>
  <div className=' '>
<motion.button

whileHover="hover"
              variants={shakeAndVibrateY}
              type="button"

              onClick={()=>{
                isLoggedIn?
                    window.location.href="/dashboard":
          
                     setAppState({
                       ...appState,showModal:true
   
                     })
                 }}
              className="text-white max-lg:text-xl mt-5 lg:font-semibold lg: text-2xl hover:bg-primary-success bg-primary-success focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold font-rubik max-lg:px-3 px-6 py-3 max-lg:py-1 max-lg:font-normal text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-[1.3rem] "
            >
              Get started
            </motion.button>
</div>
</motion.div>
</section>
</div>

<div className=' bg-white-200 pt-10 pb-10'>
<section className=' grid lg:grid-cols-2   w-[73%]  mx-auto '>
<motion.div
initial={
  {
    x:-10,opacity:0
  }
 }
 whileInView={{
  x:0,opacity:1
  
 }}
 viewport={{
  once:true
 }}
 transition={{
  delay:0.2,duration:0.5
 }}
 className='text-primary-blue mt-5'>
  <h1 className='font-bold text-[2.6rem] leading-10   max-lg:text-xl '>Instant structured meeting notes.</h1>
  <p className='leading-9 text-3xl font-normal w-[70%] max-lg:text-xl mt-10 max-sm:mt-5 max-lg:w-[90%]'>
  Access to auto-generated structured notes after each meeting. If you need the unstructured notes, we have those too.
  </p>
  <div className=' '>
<motion.button

whileHover="hover"
              variants={shakeAndVibrateY}
              type="button"

              onClick={()=>{
                isLoggedIn?
                    window.location.href="/dashboard":
          
                     setAppState({
                       ...appState,showModal:true
   
                     })
                 }}
              className="text-white max-lg:text-xl mt-5 lg:font-semibold lg: text-2xl hover:bg-primary-success bg-primary-success focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold font-rubik max-lg:px-3 px-6 py-3 max-lg:py-1 max-lg:font-normal text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-[1.3rem] "
            >
              Get started
            </motion.button>
</div>
</motion.div>

<motion.div
initial={
  {
    x:-10,opacity:0
  }
 }
 whileInView={{
  x:0,opacity:1
  
 }}
 viewport={{
  once:true
 }}
 transition={{
  delay:0.4,duration:0.5
 }}
 className=' mx-auto max-sm:mt-5'>
  <Image src="/images/illustration3.svg" width={630} height={483} alt="illustratio"/>
</motion.div>
</section>
</div>

    </div>


    </>
  )
}