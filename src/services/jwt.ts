import jwt from "jsonwebtoken";
import { prismaClient } from "../client/db/index.js";
import { JWT_SECRET } from "../config/env.js";
import type { User } from "@prisma/client";

interface JwtPayload {
  id: string;
  email: string;
}

class JWTServices {
  public static  generateTokenForUser(user:User) {
    
    const payload: JwtPayload = {
      id: user.id,
      email: user.email,
    };

    return jwt.sign(payload, JWT_SECRET, {
      expiresIn: "7d",
    });
  }

  public static verifyToken(token: string): JwtPayload {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  }
}

export default JWTServices;
