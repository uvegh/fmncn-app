import { handleSignup } from '@/app/api/auth/user';
import { AppContext } from '@/app/container';
import { User } from '@/app/types/user';
import { initiateConfluenceOAuth } from '@/app/utils';
import {confluenceAuthUrl} from '@/app/utils'
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { Fragment, useContext, useState } from 'react'

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
const route = useRouter();
const [isLoading,setIsLoading]=useState<boolean>(false)
const onSuccess = (res:any) => {
  setIsLoading(false)
  setAppState({
    ...appState,
    showModal: false,
    loginModal:false,
    
  });


  route.push("/dashboard")
};
const onLoginSuccess=(res:any)=>{
console.log(res)
}
const onError = (err:string) => {

  setIsLoading(false)
};
const [errMessage,setErrMessage]=useState<string>("")
  const[inputVal,setInputVal]=useState<User>({
    username:"",
    email:"",
    password:""
  })
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
                <Dialog.Panel className="max-w-lg  transform overflow-hidden h-[545px] w-[585px] bg-white rounded-[24px] align-middle shadow-xl transition-all relative max-lg:w-[100%] overflow-y-auto">
               
                  <section className="pt-[86px] max-md:pt-12 relative text-center  ">
                   
                    <h3 className='text-grey-300 font-bold text-lg'>Create an account?</h3>
                    <Link
                      href="#"
                      onClick={() => {
                        closeModal();
                      }}
                    >
                      <Image
                        className="absolute left-[90%] max-sm:w-8 max-sm:left-[90%] max-md:bottom-[94%] max-sm bottom-[90%] max-lg:left-[85%] cursor-pointer"
                        src="/images/close-btn.svg"
                        alt="close btn"
                        width="50"
                        height="50"
                      />
                    </Link>

<div className='mt-12 '>

<form className="max-w-sm mx-auto max-md:w-[90%] ">
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2  text-start text-sm font-medium text-gray-900 dark:text-white"> Username</label>
    <input 
    onChange={(e)=>{
setInputVal({
  ...inputVal,username:e.target.value
})
    }}
    type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required/>
  </div>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2  text-start text-sm font-medium text-gray-900 dark:text-white"> Email</label>
    <input 
    onChange={(e)=>{
setInputVal({
  ...inputVal,email:e.target.value
})
    }}
    type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required/>
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-start  text-sm font-medium text-gray-900 dark:text-white"> Password</label>
    <input
    onChange={(e)=>{
      setInputVal({
        ...inputVal,password:e.target.value
      })
          }}
    type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
 
 <label htmlFor="" className="text-red-300">{errMessage}</label>  </div>
 
  <button
  onClick={()=>{
    if(!inputVal?.email||!inputVal?.password||!inputVal?.username){
      setErrMessage("Empty field")
      return
    }
    setIsLoading(true)
    handleSignup({onSuccess:onSuccess,onError:onError,user:inputVal})
  }}
  type="button" className="text-white bg-primary-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full max-sm:w-1/2 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    {isLoading?(
    <div className="text-center">
    <div role="status">
        <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
</div>

):"Submit"}


    </button>
</form>
{/* <p  className="text-grey-200 bg-primary-success px-5 flex justify-center mx-auto  text-lg font-[500] py-3 rounded-full mt-9 max-lg:w-[90%] w-3/4 max-lg:text-sm text-center gap-x-4 max-lg:gap-x-1 cursor-pointer align-middle content-center"
//@ts-ignore
onClick={confluenceAuthUrl}
>
<Image src="images/confluence-logo.svg" className="h-6 w-6 " width="35" alt="confluence-logo" height="33" /> Continue with Confluence
</p> */}


</div>
{/* <section className='flex  text-center mt-6 justify-between w-3/4 mx-auto align-middle '>
<hr className='h-px my-3 bg-gray-200 border-0 dark:bg-gray-700 w-[45%]'/>  Or <hr className='h-px my-3 bg-gray-200 border-0 dark:bg-gray-700 w-[45%]'/>
</section>

<p 
                    onClick={()=>{
                      //@ts-ignore
                      // handleLogin({onSuccess:onLoginSuccess,user:{username: "centeDev",
                      // password: "1234"}})
                      signIn
                    
                    }}
                    className="border-2 border-[#424245]      max-md:gap-x-1  cursor-pointer
                    text-black px-5 flex justify-center mx-auto  text-lg font-[500] py-3 rounded-full mt-9 max-lg:w-[90%] w-3/4 max-lg:text-sm text-center gap-x-4 max-lg:gap-x-1  align-middle content-center
                    ">
                      <Image
                        src="images/google-logo.svg"
                        className="h-6 w-6 "
                        width="35"
                        alt="confluence-logo"
                        height="33"
                      />
                      Log in with Google
                    </p> */}


                    <p className="text-sm text-gray-500 w-3/4 mx-auto mt-12">
                    By creating an account, you agree to the Terms of Service , Privacy Policy and our default Notification settings
                    </p>
                   
                    <p className="text-sm text-gray-500 w-3/4 mx-auto mt-12 max-lg:mt-6">
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