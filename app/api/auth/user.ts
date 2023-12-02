import {analytics} from "@/app/services/index"
import { User } from "@/app/types/user"
import { BASE_URL } from "@/app/utils"
import axios from "axios"


export const handleSignup=()=>{


}
interface funcParams{
    onSuccess:(params?:any)=> void;
    onError:(params?:any)=> void
}

export const handleLogin=(user?:User)=>{

    const response= axios.post(`${BASE_URL}`,user)
    console.log(response)
    // analytics.identify(user.id,{
    //     // name:user?.name,
    //     email:user.email
    //     })
    
    //@ts-ignore
    analytics.track("Login",{
        name:"Tester",
        email:"tester@gmail.com"
    })
}

export const handleAtlassianLogin=({onSuccess,onError}:funcParams)=>{
  axios.get(`${BASE_URL}/atlassian_auth`).then((res)=>{
    console.log(res)
if(res?.status==200){
    console.log(res)
    onSuccess(res?.data?.url)
}
  }).catch((err:any)=>{
console.log(err)
onError()
  })
    
}