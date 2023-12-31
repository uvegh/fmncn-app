"use client";
import React, { useContext, useState } from 'react'
import Link from 'next/link';





import Image from "next/image";

import { AppContext } from "../container";
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { handleLogout } from '../api/auth/user';
function Navbar() {
  const { appState, setAppState ,isLoggedIn} = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false);
    const route =useRouter()
  return (
    <>
   <nav className="bg-white text-primary-blue  font-poppins max-lg:min-h-[3rem] fixed   lg:h-20  w-full   z-10 top-0 start-0  font-bold text-lg"
      // onClick={()=>{
      //   setIsOpen(false)
      // }}
      >
        <div className="w-full flex flex-wrap items-center gap-6 justify-between mx-auto max-lg:min-h-[3rem] ">
         


          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
          

            <button
              type="button"
              onClick={handleLogout}
              className=" hover: text-primary-success border-2 border-primary-success focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold lg:font-semibold lg: text-lg   px-4 py-1 text-center rounded-[1.3rem]  max-lg:hidden me-16 "
            >
           Logout
            </button>

            <button
              data-collapse-toggle="navbar-default"
              type="button"
              onClick={(e)=>{
                e.stopPropagation()
                setIsOpen(!isOpen)
              }}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center  justify-between hidden w-full mx-auto md:flex md:w-auto md:order-1"
            id="navbar-default"
          >
            <ul className="flex   lg:font-normal lg: text-2xl">
              <li>
                <Link href="/home" className="block py-2 px-3" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 px-3  rounded">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 px-3  rounded">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 px-3  rounded">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="#" className="block py-2 px-3 ">
                  Features
                </Link>
              </li>
              
              <li>
              <button
              type="button"
              onClick={handleLogout}
              className=" hover: text-primary-success border-2 border-primary-success focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold lg:font-semibold lg: text-lg   px-4 py-1 text-center rounded-[1.3rem]  lg:hidden "
            >
           Logout
            </button>
              </li>
            </ul>
          </div>

          {isOpen && (
            <div
              className="items-center justify-between  max-md:block w-full  md:w-auto md:order-1 hidden "
              id="navbar-default"
//               onClick={(e)=>{
// e.stopPropagation()
//               }}
            >
              <ul className="   ">
                <li>
                  <Link
                    href="/home"
                    className="block py-2 px-3"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block py-2 px-3  rounded">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block py-2 px-3  rounded">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block py-2 px-3  rounded">
                    Contact
                  </Link>
                </li>

                <li>
                  <Link href="#" className="block py-2 px-3 ">
                    Features
                  </Link>
                </li>
                <li>
              <button
              type="button"
              onClick={handleLogout}
              className=" hover: text-primary-success border-2 border-primary-success focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold lg:font-semibold  text-lg   px-4 py-1 text-center rounded-lg   "
            >
           Logout
            </button>
              </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar