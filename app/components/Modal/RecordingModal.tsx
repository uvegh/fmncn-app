
import { AppContext } from "@/app/container";
import { initiateConfluenceOAuth } from "@/app/utils";
import { Dialog, Transition } from "@headlessui/react";
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
                <Dialog.Panel className="max-w-[85%] transform overflow-hidden min- h-[60%]   w-[60%] bg-white rounded-[24px] align-middle shadow-xl transition-all relative">
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
                    <h3 className="text-primary-blue font-extrabold text-2xl font-rubik uppercase">
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
                        
                    <audio  className="w-[75%] mx-auto"
                    //@ts-ignore
                    src={audioRecord} controls>

                    </audio>
                    </main>
                    
<section className="flex justify-center gap-x-3 w-[60%] max-md:fex-col mx-auto mt-10">
<Image
                        className="mx-auto cursor-pointer text-center mt-5"
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
                    
<div className=" justify-center flex gap-x-5 mt-10">
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
