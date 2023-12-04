import { analytics } from "@/app/services/index"
import { User } from "@/app/types/user"
import { BASE_URL } from "@/app/utils"
import axios from "axios"
import {deleteCookie, getCookie, setCookie} from 'cookies-next'

interface funcParams {
  onSuccess: (params?: any) => void;
  onError: (params?: any) => void
  user?:User
}

export const handleSignup = ({ onSuccess, onError,user }: funcParams) => {

  const response = axios.post(`${BASE_URL}/signup`, user).then((res)=>{

    if (res?.status == 200) {
      console.log(res)
      const { data } = res;
 setCookie("userObj",data?.user)
      analytics.identify(data?.user?.id, {
        userName: data?.user?.username,
      
        email: data?.user?.email
      });
      analytics.track(`${data?.user?.username} Signed up and Logged in `,{
        userName: data?.user?.username,
      
        email: data?.user?.email,
        id:data?.user?.id
    })

    setCookie("user_token",data?.token)


      onSuccess()

    }
  }).catch((err)=>{
console.log(err)

if (err?.status=="404"){
  onError("Invalid Credentials")
}else{
  onError("Something went wrong")
}
  })
  console.log(response)
  
 
}

export const DEFAULT_HEADERS_AUTHORIZATION={
  headers:{
    'Authorization': `Token ${getCookie("user_token")}`
  }
}


export const handleLogin = ({ onSuccess, onError,user }: funcParams) => {

  const response = axios.post(`${BASE_URL}/login`, user).then((res)=>{

    if (res?.status == 200) {
      
      const { data } = res;
      setCookie("userObj",data?.user)
      console.log(data?.user?.id)
      analytics.identify(data?.user?.id, {
        userName: data?.user?.username,
      
        email: data?.user?.email
      });
      analytics.track(`${data?.user?.username} logged in`,{
        userName: data?.user?.username,
      
        email: data?.user?.email,
        id:data?.user?.id
    })

    setCookie("user_token",data?.token)


      onSuccess()

    }
  }).catch((err)=>{
console.log(err)

if (err?.status=="404"){
  onError("Invalid Credentials")
}else{
  onError("Something went wrong")
}
  })
  console.log(response)
  
 
}




export const handleAtlassianLogin = ({ onSuccess, onError }: funcParams) => {
  axios.get(`${BASE_URL}/atlassian_auth`).then((res) => {
    console.log(res)
    if (res?.status == 200) {
      console.log(res)
      const { data } = res;
      analytics.identify(data?.user?.id, {
        firstName: data?.user?.name?.split("")[0],
        lastName: data?.user?.name?.split("")[0],
        email: data?.user?.email
      });
      analytics.track("Logged in with confluence",{
        name: data?.user?.name,
        email:data?.user?.email,
        id:data?.user?.id
    })



      onSuccess(res?.data?.url)

    }
  }).catch((err: any) => {
    console.log(err)
    onError()
  })

}

export const handleLogout=()=>{
  window.location.replace("/home")
 
    deleteCookie("user_token")
    
  
}