"use client";
import axios from "axios";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { CiMicrophoneOn, CiMicrophoneOff } from "react-icons/ci";
import { BASE_URL } from "../utils";
import { DEFAULT_HEADERS_AUTHORIZATION } from "../api/auth/user";
import { getCookie } from "cookies-next";

interface funcParams{
  sendBlob:(params?:any)=>void
  stop:()=>void
  start:()=>void
}
const AudioRecorder = ({sendBlob,start,stop}:funcParams) => {
  const [permission, setPermission] = useState(false);

  const mediaRecorder = useRef<any>(null);
  const [recordingStatus, setRecordingStatus] = useState<string>("inactive");
  const [stream, setStream] = useState<any>(null);
  const [audioChunks, setAudioChunks] = useState<any[]>([]);
  const [audio, setAudio] = useState<any>(null);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [transcripts, setTranscripts] = useState<boolean>(false);
  const [second, setSecond] = useState<string | number>("00");
  const [minute, setMinute] = useState<string | number>("00");
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const user= getCookie("userObj")
  //@ts-ignore
  let userObj
  if(user){
     userObj=JSON.parse(user)
  }

   
  const mimeType = "audio/webm";
  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err: any) {
        alert(err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };

  // const startRecording = async () => {
  //   getMicrophonePermission();
  //   setRecordingStatus("recording");
  //   setIsActive(true);
    
  //   const media = new MediaRecorder(stream);
    
  //   mediaRecorder.current = media;

  //   mediaRecorder.current.start();
  //   let localAudioChunks: any = [];
  //   mediaRecorder.current.ondataavailable = (event: any) => {
  //     if (typeof event.data === "undefined") return;
  //     if (event.data.size === 0) return;
  //     localAudioChunks.push(event.data);
  //   };
  //   //@ts-ignore
  //   start()
  //   setAudioChunks(localAudioChunks);
  // };

  const startRecording = async () => {
    try {
      const streamData = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });

      setPermission(true);
      setStream(streamData);
      setRecordingStatus("recording");
      setIsActive(true);

      // Create new MediaRecorder instance using the stream
      const media = new MediaRecorder(streamData);
      // Set the MediaRecorder instance to the mediaRecorder ref
      mediaRecorder.current = media;
      // Invokes the start method to start the recording process
      mediaRecorder.current.start();

      let localAudioChunks: any = [];
      mediaRecorder.current.ondataavailable = (event: any) => {
        if (typeof event.data === "undefined") return;
        if (event.data.size === 0) return;
        localAudioChunks.push(event.data);
      };

      //@ts-ignore
      start();
      setAudioChunks(localAudioChunks);
    } catch (err: any) {
      alert(err.message);
    }
  };

  const stopRecording = (cancel?:boolean) => {
    setRecordingStatus("inactive");
    setSecond("00")
    setMinute("00")
    clearInterval(intervalId)
    setIsActive(false);
    //@ts-ignore
    mediaRecorder.current.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: mimeType });

      const audioUrl = URL.createObjectURL(audioBlob);
      setAudio(audioUrl);
      console.log(audioUrl);
      sendBlob(audioUrl)
      setAudioChunks([]);
      handleSave(audioUrl);
    };
    mediaRecorder.current.stop();
    if(!cancel){
      stop()
    }
    
    setCounter(0);
  };

  const testing = async (file: File) => {
    if (file) {
      const formData = new FormData();
      formData.append("audio_file", file);
      console.log(audio)
      setIsloading(true);

      try {
        const response = await axios.post(
          `${BASE_URL}/create_transcript`,
          formData,
         DEFAULT_HEADERS_AUTHORIZATION
        );
        setIsloading(false);
        console.log(response.data);

        setTranscripts(response.data?.data?.text);
        localStorage.setItem("meeting_transcripts",(response.data?.data?.text))
                console.log(transcripts); // Assuming the response contains useful data
      } catch (error) {
        console.error("Error uploading audio:", error);
        setIsloading(true);
      }
    }
  };

  const handleSave = async (blob: any) => {
    if (blob) {
      const audioBlob = await fetch(blob).then((r) => r.blob());
      const audioFile = new File([audioBlob], "audio.mp3", {
        type: "audio/mpeg",
      });

      console.log("recording", audioFile);

      
      testing(audioFile);
    }
  };
  let intervalId: any;
  useEffect(() => {
   

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);

        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);
  return (
    <>
      <section className="pt-16 max-lg:pt-0">
        <div className="bg-primary-blue font-rubik rounded-[1.3rem] mx-auto  my-auto min-h-[50%] max-lg:h-[15em] h-[20em] max-sm:rounded  max-sm:w-full w-[90%]">
          <div className="">
            <h1 className="text-4xl max-lg:text-xl max-lg:font-normal font-semibold text-center text-white pt-8">
              Welcome, {userObj?.username}
            </h1>
            <section className="flex justify-center gap-x-10 mt-8 items-center">
              <button className="hover:scale-125 transition-all ">
                <Image
                  onClick={()=>{
                    stopRecording()
                    clearInterval(intervalId);
                     setSecond("00")
        setMinute("00")
                  }}
                  width="40"
                  height="40"
                  src="/images/stop.svg"
                  className="    "
                  alt=" stop"
                />
              </button>

              <button
                onClick={startRecording}
                className={
                  recordingStatus === "inactive"
                    ? "animate-bounce "
                    : "animate-pulse"
                }
              >
                <Image
                  width="100"
                  height="100"
                  src="/images/mic.svg"
                  className=""
                  alt=" Mic"
                />
              </button>

              <button className="hover:scale-125 transition-all"
              
              onClick={()=>{
                stopRecording(true)
               
              }}>
                <Image

                  width="36"
                  height="36"
                  src="/images/cancel.svg"
                  className="   "
                  alt=" cancel"
                />
              </button>
            </section>
          </div>

          <section className="flex justify-center gap-x-5 mt-2 text-white items-center mx-auto">
            <p className="opacity-0">
              <Image
                width="88"
                height="80"
                src="/images/pause.svg"
                className="  max-md:w-[30%] max-md:h-[30%] "
                alt=" pause"
              />
            </p>

            <p className="align-middle text-2xl">{`${minute}: ${second}`}</p>
            <p className="align-middle text-2xl opacity-0">00:00:00</p>
          </section>
        </div>
      </section>

   
    </>
  );
};
export default AudioRecorder;
