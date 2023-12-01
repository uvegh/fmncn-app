"use client"
import React, { createContext, useReducer } from "react";
import GetStarted from "../components/Modal/GetStarted";
import LoginModal from "../components/Modal/LoginModal";

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
    showConsent:true
}


)

return(
<AppContext.Provider value={{appState,setAppState}}>
<div>
    {children}
</div>
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

)

}

export default React.memo(AppContainer)