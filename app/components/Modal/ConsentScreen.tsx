import { AppContext } from "@/app/container";
import { initiateConfluenceOAuth } from "@/app/utils";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useContext } from "react";

const ConsentScreen: React.FC<{
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}> = ({ isOpen, setIsOpen }) => {
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
                      <p
                        className="text-black  px-5  mx-auto  leading-6 text-2xl font-[500] text-[1.3rem]  rounded-full mt-9 max-lg:  max-sm:w-full font-rubik  text-center  "
                    
                      >
                       We're on a mission to enhance the quality of transcription technology. <br/> <br/>

If you would be willing to contribute to the future of seamless meetings by allowing us  use your <br/>  meeting transcriptions for data training, it would go a long way in ensuring we create an even <br/> better product for you. <br/> <br/> 

Be assured that your privacy is our priority. All data used is anonymous and treated with the <br/>  highest level of security. <br/> <br/> 

Ready to be a part of the innovation journey?
                      </p>
                    </main>
                    
<section className="flex justify-center gap-x-3 w-[60%] max-md:fex-col mx-auto mt-10">
<p className="font-semibold border-2 border-primary-success px-5  justify-center mx-auto  text-lg  py-3 rounded-full mt-9 w-3/4  text-center gap-x-4 text-primary-success">
No, Transcribe Only
                    </p>

<p className="text-white border-2 px-5  justify-center mx-auto  text-lg font-[500] py-3 rounded-full mt-9 w-3/4  text-center gap-x-4 bg-primary-success">
                  
                   Yes, Lets Get Started
                    </p>

                                  
</section>
                    

                    
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

export default ConsentScreen;
