"use client"
import React, { createContext, useEffect, useReducer, useState } from "react";
import GetStarted from "../components/Modal/GetStarted";
import LoginModal from "../components/Modal/LoginModal";
import { SessionProvider } from "next-auth/react";
import { getCookie } from "cookies-next";

export const AppContext=createContext<any>({})

const AppContainer:React.FC<{children:any}>=({
children
})=>{
const [appState,setAppState]=useReducer(
(prev:any,next:any)=>{
    const newState={...prev,...next};
    return newState
},{
    showModal:false,
    loginModal:false,
    showConsent:true,
    
}


)
const [isLoggedIn,setIsLoggedIn]=useState(false)
const token=getCookie("user_token")

useEffect(()=>{
 
  if(token){
    setIsLoggedIn(true)
  }else{
    setIsLoggedIn(false)
  
  }
},[isLoggedIn,token])
return(
  <SessionProvider>
<AppContext.Provider value={{appState,setAppState,isLoggedIn,setIsLoggedIn}}>

    {children}

<GetStarted
isOpen={appState.showModal}
setIsOpen={(value:boolean)=>{
  setAppState({  ...appState,
    showModal:value
})
}}
/>


<LoginModal
isOpen={appState.loginModal}
setIsOpen={(value:boolean)=>{
  setAppState({  ...appState,
    loginModal:value
})
}}
/>

</AppContext.Provider>
</SessionProvider>
)

}

export default React.memo(AppContainer)