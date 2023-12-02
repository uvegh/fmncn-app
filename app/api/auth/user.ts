import { analytics } from "@/app/services/index"
import { User } from "@/app/types/user"
import { BASE_URL } from "@/app/utils"
import axios from "axios"


export const handleSignup = () => {


}
interface funcParams {
  onSuccess: (params?: any) => void;
  onError: (params?: any) => void
  user?:User
}

export const handleLogin = ({ onSuccess, onError,user }: funcParams) => {

  const response = axios.post(`${BASE_URL}/login`, user).then((res)=>{

    if (res?.status == 200) {
      console.log(res)
      const { data } = res;
      analytics.identify(data?.user?.id, {
        firstName: data?.user?.name?.split("")[0],
        lastName: data?.user?.name?.split("")[0],
        email: data?.user?.email
      });
      analytics.track("Logged in",{
        name: data?.user?.name,
        email:data?.user?.email,
        id:data?.user?.id
    })



      onSuccess(res?.data?.url)

    }
  }).catch((err)=>{
console.log(err)
  })
  console.log(response)
  
  analytics.track("User logged in", {
    name: "Tester",
    email: "tester@gmail.com"
  })
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