export type User={
    
        id?:number;
        password?:string;
        email?:string;
        username?:string
        
   
}

export type UserLog={
    
        token: string;
        user:User
        
    
}