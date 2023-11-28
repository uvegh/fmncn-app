"use client";
import React, { useContext, useState } from "react";

import { IoMdMenu } from "react-icons/io";

import Image from "next/image";
import Link from "next/link";
import { AppContext } from "../container";

function Header() {
  const { appState, setAppState } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-primary-blue dark:bg-gray-900 font-poppins fixed w-full text-white z-20 top-0 start-0  font-semibold text-lg"
      onClick={()=>{
        setIsOpen(false)
      }}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center gap-6 justify-between mx-auto p-4">
          <Link href="" className="flex items-center">
            <Image
              width="100"
              height="96"
              src="/logo1.svg"
              className="  max-md:w-[30%] max-md:h-[30%] "
              alt=" Logo"
            />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link
              href="#"
              className="block py-2 px-3  max-lg:hidden"
              aria-current="page"
              onClick={() => {
                setAppState({
                  ...appState,
                  showModal: false,
                  loginModal: true,
                });
              }}
            >
              Log in
            </Link>

            <button
              type="button"
              onClick={() => {
                setAppState({
                  ...appState,
                  showModal: true,
                });
              }}
              className="text-white hover:bg-primary-success bg-primary-success focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold font-rubik  px-4 py-2 text-center rounded-full text-xl max-lg:hidden"
            >
              Get started
            </button>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              onClick={(e)=>{
                e.stopPropagation()
                setIsOpen(!isOpen)
              }}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-default"
          >
            <ul className="flex  text-white ">
              <li>
                <Link href="#" className="block py-2 px-3" aria-current="page">
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
              <ul className="  text-white ">
                <li>
                  <Link
                    href="#"
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
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
