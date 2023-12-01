"use client"
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { CiMicrophoneOn ,CiMicrophoneOff} from "react-icons/ci";
const AudioRecorder = () => {
    const [permission, setPermission] = useState(false);

    const mediaRecorder = useRef<any>(null);
    const [recordingStatus, setRecordingStatus] = useState<string>("inactive");
    const [stream, setStream] = useState<any>(null);
    const [audioChunks, setAudioChunks] = useState<any[]>([]);
    const [audio, setAudio] = useState<any>(null);
    const [isLoading,setIsloading]=useState<boolean>(false);
    const [transcripts,setTranscripts]=useState<boolean>(false);
    const [second, setSecond] = useState<string>("00");
    const [minute, setMinute] = useState<string>("00");
    const [counter, setCounter] = useState(0);
    const [isActive, setIsActive] = useState(false);
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
            } catch (err:any) {
                alert(err.message);
            }
        } else {
            alert("The MediaRecorder API is not supported in your browser.");
        }
    };

    const startRecording = async () => {
        getMicrophonePermission()
        setRecordingStatus("recording");
setIsActive(true)
        //create new Media recorder instance using the stream
        const media = new MediaRecorder(stream, { type: mimeType });
        //set the MediaRecorder instance to the mediaRecorder ref
        mediaRecorder.current = media;
        //invokes the start method to start the recording process
        mediaRecorder.current.start();
        let localAudioChunks:any = [];
        mediaRecorder.current.ondataavailable = (event:any) => {
           if (typeof event.data === "undefined") return;
           if (event.data.size === 0) return;
           localAudioChunks.push(event.data);
        };
        //@ts-ignore
        setAudioChunks(localAudioChunks);
      };

      const stopRecording = () => {
        setRecordingStatus("inactive");
      setSecond("00")
      setMinute("00")
        setIsActive(false)
        //@ts-ignore
        mediaRecorder.current.onstop = () => {
  
           const audioBlob = new Blob(audioChunks, { type: mimeType });
        
           const audioUrl = URL.createObjectURL(audioBlob);
           setAudio(audioUrl);
           console.log(audioUrl)
           setAudioChunks([]);
           handleSave(audioUrl)
        };
        mediaRecorder.current.stop();
      };

      const testing = async (file:File) => {
        if (file) {
          const formData = new FormData();
          formData.append("audio", file);
          setIsloading(true)
    
          try {
            
            const response = await axios.post(
              "https://translator-rra0.onrender.com/translate",
              formData,
              {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }
            );
            setIsloading(false)
            console.log(response.data?.data?.text);

            setTranscripts(response.data?.data?.text)
            console.log(transcripts) // Assuming the response contains useful data
          } catch (error) {
            console.error("Error uploading audio:", error);
            setIsloading(true)
          }
        }
      };

      const handleSave = async (blob:any) => {
        if (blob) {
          const audioBlob = await fetch(blob).then((r) => r.blob());
          const audioFile = new File([audioBlob], 'audio.mp3', { type: 'audio/mpeg' });
    
         
          console.log("recording", audioFile);
    
          // Call your testing function here if needed
          testing(audioFile);
        }

        
      };

      useEffect(() => {
        let intervalId:any;
    
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
        <div className="mt-14 pt-14 mx-auto my-auto text-center">
            <h2>Audio Recorder</h2>
            <main>
                <div className="audio-controls">
                   
                    
                </div>
            </main>

            <div className="audio-controls mt-14 pt-14">
 
 
    { recordingStatus === "inactive" ? (
        <>
    <button onClick={startRecording} className="bg-blue-500  mx-auto text-5xl text-center rounded " type="button">
       
        <CiMicrophoneOn />
       
    </button> <br />
Start
    </>
    ) : null}
    {recordingStatus === "recording" ? (<>
    <button onClick={stopRecording} className="bg-red-500  mx-auto text-5xl text-center rounded " type="button">
        
        <CiMicrophoneOff />    </button>
        <br />
        Stop 
        </>
    ) : null}
    <div className=" text-5xl font-extrabold-flex">
          <span className="minute">{minute}</span>
          <span>:</span>
          <span className="second">{second}</span>
        </div>
</div>



{!isLoading?(<p className="mt-8">
    {transcripts}
</p>):(
<p className="animate-pulse w-10 h-10 rounded-full bg-blue-500 text-center mx-auto mt-8">

</p>

)
    
}
        </div>
    );
};
export default AudioRecorder;