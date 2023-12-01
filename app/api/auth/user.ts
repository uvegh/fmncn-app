import {analytics} from "@/app/services"


export const handleSignup=()=>{


}

export const handleLogin=(user?:any)=>{
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