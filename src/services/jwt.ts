import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";
import type { User } from "@prisma/client";
import type { JWTUser } from "../interface.js";



class JWTServices { 
  public static  generateTokenForUser(user:User) {
    
    const payload: JWTUser = {
      id: user.id,
      email: user.email,
    };

    return jwt.sign(payload, JWT_SECRET, {
      expiresIn: "7d",
    });
  }


  public static decodeToken(token: string){
    return jwt.verify(token, JWT_SECRET) as JWTUser;
  }
}

export default JWTServices;
