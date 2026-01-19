export interface JWTUser{
    id:string
    email:String
}

export interface GraphqlContext {
    user?:JWTUser;       
    
}