"use client";
import { handleAtlassianLogin, handleLogin } from "@/app/api/auth/user";
import { AppContext } from "@/app/container";
import { initiateConfluenceOAuth } from "@/app/utils";
import { Dialog, Transition } from "@headlessui/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Fragment, useContext } from "react";

const LoginModal: React.FC<{
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}> = ({ isOpen, setIsOpen }) => {
  function closeModal() {
    setIsOpen(false);
    console.log("closed");
  }
  const onSuccess = (authLink: string) => {
    route.push(authLink);
  };
  const onLoginSuccess=(res:any)=>{
console.log(res)
  }
  const onError = () => {
    console.log("something went wrong");
  };

  const { appState, setAppState } = useContext(AppContext);
  //@ts-ignore
  const {signIn,signOut}=useSession()
  const route = useRouter();
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
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
                <Dialog.Panel className="max-w-lg  transform overflow-hidden h-[545px] w-[585px] bg-white rounded-[24px] align-middle shadow-xl transition-all relative max-lg:w-[100%]">
                  <section className="pt-[86px] relative text-center  ">
                    <h3 className="text-grey-300 font-bold text-lg">
                      Log in to your account
                    </h3>
                    <Link
                      href="#"
                      onClick={() => {
                        closeModal();
                      }}
                    >
                      <Image
                        className="absolute left-[90%] bottom-[90%] max-lg:left-[85%] cursor-pointer"
                        src="/images/close-btn.svg"
                        alt="close btn"
                        width="50"
                        height="50"
                      />
                    </Link>
                    <div className="mt-12 ">
                      <p
                        className="text-grey-200 bg-primary-success px-5 flex justify-center mx-auto  text-lg font-[500] py-3 rounded-full mt-9 max-lg:w-[90%] w-3/4 max-lg:text-sm text-center gap-x-4 max-lg:gap-x-1 cursor-pointer align-middle content-center"
                        onClick={() => {
                          handleAtlassianLogin({ onSuccess, onError });
                        }}
                      >
                        <Image
                          src="images/confluence-logo.svg"
                          className="h-6 w-6 "
                          width="35"
                          alt="confluence-logo"
                          height="33"
                        />
                        Continue with Confluence
                      </p>
                    </div>
                    <section className="flex  text-center mt-6 justify-between w-3/4 mx-auto align-middle ">
                      <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700 w-[45%]" />{" "}
                      Or{" "}
                      <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700 w-[45%]" />
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
                    </p>

                    <p className="text-sm text-gray-500 w-3/4 mx-auto mt-12">
                      By creating an account, you agree to the Terms of Service
                      , Privacy Policy and our default Notification settings
                    </p>

                    <p className="text-sm text-gray-500 w-3/4 mx-auto mt-12 max-lg:mt-6">
                      Dont have an account?{" "}
                      <Link
                        href=""
                        className="underline"
                        onClick={() => {
                          closeModal();
                          setAppState({
                            ...appState,
                            showModal: true,
                          });
                        }}
                      >
                        Sign up
                      </Link>
                    </p>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default LoginModal;
