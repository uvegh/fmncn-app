import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export default function middleware(request:NextRequest){
    const isAuthenticated=request.cookies.get("user_token")
    
    if(!isAuthenticated&&request.nextUrl.pathname==="/dashboard"){
       
        return NextResponse.redirect(new URL("/home",request.url))
    }
}

