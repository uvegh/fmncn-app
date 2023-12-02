export type User={
    
        id:number;
        password:string;
        email:string;
   
}

export type UserLog={
    
        token: string;
        user:User
        
    
}