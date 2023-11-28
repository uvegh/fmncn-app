import { AppContext } from '@/app/container';
import { initiateConfluenceOAuth } from '@/app/utils';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useContext } from 'react'

const GetStarted:React.FC<{
    isOpen:boolean;
    setIsOpen:(value:boolean)=>void;
}>=({
    isOpen,setIsOpen
})=>{

    function closeModal(){
        setIsOpen(false)
    }
const {appState,setAppState}=useContext(AppContext)

    return(
        <>
        <Transition
        
        appear show={isOpen} as={Fragment}
        
        >
        <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >

<Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
      
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-lg transform overflow-hidden h-[545px] w-[585px] bg-white rounded-[24px] align-middle shadow-xl transition-all relative">
               
                  <section className="pt-[86px] relative text-center  ">
                   
                    <h3 className='text-grey-300 font-bold text-lg'>Create an account?</h3>
                    <Link href="#"
                   onClick={()=>{
                   
                closeModal()
                    
                   }}

                  
                >
                    <Image
                 
                    className='absolute left-[90%] bottom-[90%]  cursor-pointer'
                    src="/images/close-btn.svg" alt="close btn" width="50" height="50" />
                </Link>

<div className='mt-12 '>
<p  className="text-grey-200 bg-primary-success px-5 flex justify-center mx-auto  text-lg font-[500] py-3 rounded-full mt-9 w-3/4  text-center gap-x-4 cursor-pointer"
onClick={initiateConfluenceOAuth}
>
<Image src="images/confluence-logo.svg" className="h-6 w-6 " width="35" alt="confluence-logo" height="33" /> Continue with Confluence
</p>
</div>
<section className='flex  text-center mt-6 justify-between w-3/4 mx-auto align-middle '>
<hr className='h-px my-3 bg-gray-200 border-0 dark:bg-gray-700 w-[45%]'/>  Or <hr className='h-px my-3 bg-gray-200 border-0 dark:bg-gray-700 w-[45%]'/>
</section>

<p  className="text-black border-2 border-[#424245] px-5 flex justify-center mx-auto  text-lg font-[500] py-3 rounded-full mt-9 w-3/4  text-center gap-x-4 ">
<Image src="images/google-logo.svg" className="h-6 w-6 " width="35" alt="confluence-logo" height="33" />Sign up with Google
</p>


                    <p className="text-sm text-gray-500 w-3/4 mx-auto mt-12">
                    By creating an account, you agree to the Terms of Service , Privacy Policy and our default Notification settings
                    </p>
                   
                    <p className="text-sm text-gray-500 w-3/4 mx-auto mt-12">
                    Already have an account? <Link href="" className='underline'
                     onClick={()=>{
                      closeModal()
                      setAppState({
                        ...appState,
                        // showModal: false,
                        loginModal:true
                      });
                      
           
                     
                  }}
                    >Log in</Link>
                    </p>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
    </Dialog>

    

        </Transition>
        </>
    )
}

export default GetStarted