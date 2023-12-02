"use client";
import React, { useEffect, useState } from "react";
import Recorder from "../components/Recorder";
import ConsentScreen from "../components/Modal/ConsentScreen";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import RecordingModal from "../components/Modal/RecordingModal";
import { analytics } from "../services";
import { useRouter } from "next/navigation";

function Page() {
  const [showConsent, setShowConsent] = useState<boolean>(false);
  const [showRecorded, setShowRecorded] = useState<boolean>(false);
  const [audioUrl, setAudioUrl] = useState<Blob>();
  // const router = useRouter();
  const handleRecieveBlob = (data: any) => {
    setAudioUrl(data);
  };
  // const handlePageRoute = () => {
  //   analytics.page();
  // };

  useEffect(() => {
  
analytics.page({
  path:'/home',
  title:'homepage viewed',
  
})
    // router.events.on("routeChangeComplete", handlePageRoute);
    // return () => {
    //   router.events.off("routeChangeComplete", handlePageRoute);
    // };
  }, []);
  return (
    <>
      <ConsentScreen isOpen={showConsent} setIsOpen={setShowConsent} />
      <RecordingModal
        isOpen={showRecorded}
        setIsOpen={setShowRecorded}
        //@ts-ignore
        audioRecord={audioUrl}
      />

      {/* <Navbar/> */}
      <div className="bg-grey-200 min-h-screen ">
        <section className=" mx-auto">
          <Recorder
            sendBlob={handleRecieveBlob}
            start={() => setShowRecorded(false)}
            stop={() => setShowRecorded(true)}
          />
        </section>
        <section>
          <div className="bg-white font-rubik rounded-[1.3rem] text-primary-blue text-xl mx-auto mt-16 my-auto min-h-[50%] h-[20em]  w-[90%]">
            <div className="">
              <header className="flex justify-between w-[90%] mx-auto text-black font-semibold h-20 items-center">
                <p className="text-3xl">Meeting Records</p>
                <p className="text-xl text-primary-success flex items-center">
                  See more <IoIosArrowForward />{" "}
                </p>
              </header>
              <table className="table-auto mx-auto font-semibold min-w-[90%] text-start overflow-x-auto  ">
                <thead className="border-b border-white-200   ">
                  <tr className=" font-bold text-lg">
                    <th className="text-start">Date</th>
                    <th className="text-start">Meeting Name</th>
                    <th className="text-start">Duration</th>
                    <th className="text-center pe-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b  pb-2 pt-2 h-14 text-lg">
                    <td>10th Dec, 2022</td>
                    <td>Project Acer: Stand Up Meeting</td>
                    <td>45:02:34</td>
                    <td className="text-center">
                      <button
                        type="button"
                        className=" hover: text-primary-success border-2 h-[2rem] align-text-middle  border-primary-success focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold lg: text-lg    px-4 py-1 text-center rounded-[1.6rem]  max-lg:hidden items-center "
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b  pb-2 pt-2 h-14 text-lg">
                    <td>10th Dec, 2022</td>
                    <td>Project Acer: Stand Up Meeting</td>
                    <td>45:02:34</td>
                    <td className="text-center">
                      <button
                        type="button"
                        className=" hover: text-primary-success border-2 h-[2rem] align-text-middle  border-primary-success focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold lg: text-lg    px-4 py-1 text-center rounded-[1.6rem]  max-lg:hidden "
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b  pb-2 pt-2 h-14 text-lg">
                    <td>10th Dec, 2022</td>
                    <td>Project Acer: Stand Up Meeting</td>
                    <td>45:02:34</td>
                    <td className="text-center">
                      <button
                        type="button"
                        className=" hover: text-primary-success border-2 h-[2rem] align-text-middle  border-primary-success focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold lg: text-lg    px-4 py-1 text-center rounded-[1.6rem]  max-lg:hidden "
                      >
                        View Details
                      </button>
                    </td>
                  </tr>

                  <tr className="border-b  pb-2 pt-2 h-14 text-lg">
                    <td>10th Dec, 2022</td>
                    <td>Project Acer: Stand Up Meeting</td>
                    <td>45:02:34</td>
                    <td className="text-center">
                      <button
                        type="button"
                        className=" hover: text-primary-success border-2 h-[2rem] align-text-middle  border-primary-success focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold lg: text-lg    px-4 py-1 text-center rounded-[1.6rem]  max-lg:hidden "
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          ​
        </section>
      </div>
    </>
  );
}

export default Page;
