
import { AppContext } from "@/app/container";
import { initiateConfluenceOAuth } from "@/app/utils";
import { Dialog, Transition } from "@headlessui/react";
import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useContext, useState } from "react";

interface recordingBlob{
    audioRecord:Blob
  } 

const RecordingModal: React.FC<{
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  audioRecord?:recordingBlob
}> = ({ isOpen, setIsOpen,audioRecord }) => {
  function closeModal() {
    setIsOpen(false);
    console.log("closed");
  }
  const { appState, setAppState } = useContext(AppContext);
const userObj=getCookie("userObj")

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
            <div className="flex min-h-full mt-10 items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="lg:max-w-[85%] max-lg:w-full transform overflow-hidden min- h-[60%]   lg:w-[60%] bg-white rounded-[24px] align-middle shadow-xl transition-all relative">

                <Link
                      href="#"
                      onClick={() => {
                        closeModal();
                      }}
                      className="hidden max-lg:block "
                    >
                      <Image
                        className="ms-auto cursor-pointer text-center mt-1 "
                        src="/images/close-btn.svg"
                        alt="close btn"
                        width="68"
                        height="68"
                      />
                    </Link>
                  
                <Link
                      href="#"
                    //   onClick={() => {
                    //     closeModal();
                    //   }}
                    >
                      <Image
                        className="mx-auto cursor-pointer text-center mt-5"
                        src="logo2.svg"
                        alt="close btn"
                        width="78"
                        height="78"
                      />
                    </Link>

                  <section className="pt-10 relative text-center pb-10 min-w-[90%]">
                    <h3 className="text-primary-blue font-extrabold text-2xl font-rubik uppercase max-lg:font-bold max-lg:text-xl">
                    We Care About Your Privacy
                    </h3>
                    {/* <Link
                      href="#"
                      onClick={() => {
                        closeModal();
                      }}
                    >
                      <Image
                        className="absolute left-[90%] bottom-[90%]  cursor-pointer"
                        src="/images/close-btn.svg"
                        alt="close btn"
                        width="50"
                        height="50"
                      />
                    </Link> */}
                    <main className="mt-12 ">
                        
                    <audio  className="w-[90%] mx-auto"
                    //@ts-ignore
                    src={audioRecord} controls>

                    </audio>
                    </main>

                   
<section className="flex justify-center gap-x-3 w-[60%] max-md:flex-col max-md:w-[90%]  mx-auto mt-10 ">
  
<Image
                        className="mx-auto  text-center mt-5 border-grey-200 border-[.2rem]"
                        src="/images/viewMeetingNotes.svg"
                        alt="close btn"
                        width="360"
                        height="80"
                      />

<Image
                        className="mx-auto cursor-pointer text-center mt-5"
                        src="/images/viewTranscripts.svg"
                        alt="close btn"
                        width="360"
                        height="80"
                      />

                                  
</section>
<section className="flex  gap-x-3 w-[60%] max-md:flex-col max-md:w-[90%]  mx-auto mt-4 ">
             <p className="-skew-y-2 text-primary-success ">
      Coming soon
      ...
    </p>
    <p className="-skew-y-6 text-primary-success hidden">
      Coming soon
      ...
    </p>
              </section> 
                    
<div className=" justify-center flex gap-x-5 mt-10 max-sm">
                            <Image src="images/databricks.svg"
                            height={30}
                            width={137}
                            alt="databricks"
                            
                            />
                              <Image src="images/aws.svg"
                            height={30}
                            width={56}
                            alt="databricks"
                            
                            />
                              <Image src="images/twilo.svg"
                            height={40}
                            width={99}
                            alt="databricks"
                            
                            />
                            </div> 
                    
                    
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

export default RecordingModal;
