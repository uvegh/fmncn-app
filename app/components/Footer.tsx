import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <>
    



    <footer className="bg-primary-blue ">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid lg:grid-cols-5 gap-8 px-4 py-6 lg:py-8 max-md:grid-cols-2 max-sm:grid-cols-1">

      <div>
      <Image
              width="100"
              height="96"
              src="/logo2.svg"
              className=" lg:w-[50%]"
              alt=" Logo"
            />
        </div>


        <div>
       
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li>Ever wish you could press rewind on a meeting? Now you can with TranscribeMate, your go-to meeting transcription wizard. Say goodbye to scribbled notes and hello to a world where every word counts.</li>
            </ul>
            <li className='flex gap-x-4 mt-4'>

            <Image
              width="34"
              height="34"
              src="/images/whatsapp.svg"
              className=" "
              alt=" Logo"
            />

<Image
              width="34"
              height="34"
              src="/images/instagram.svg"
              className=""
              alt=" Logo"
            />

<Image
              width="34"
              height="34"
              src="/images/twitter.svg"
           
              alt=" Logo"
            />

<Image
              width="34"
              height="34"
              src="/images/facebook.svg"
              className=" "
              alt=" Logo"
            />
            </li>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-grey-200  dark:text-white">Our Company</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
           





                <li className="mb-4">
                    <Link href="#" className="hover:underline"> About us</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Careers</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Our Policy</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Services</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Blog</Link>
                </li>
            </ul>
        </div>
        <div>

        Contact us




        <h2 className="mb-6 text-sm font-semibold text-grey-200  dark:text-white">Contact Us</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <Link href="#" className="hover:underline">info@fmcn.com</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">+1 813 678 7890</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">No 4 Churchill Street,</Link>
                </li>
            </ul>
        </div>
        <div>
        <h2 className="mb-6 text-sm font-semibold text-grey-200  dark:text-white">Partnership</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <Link href="#" className="hover:underline">iOS</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Android</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Windows</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">MacOS</Link>
                </li>
            </ul>
        </div>
    </div>
    
  
    </div>
</footer>


    </>
  )
}

export default Footer