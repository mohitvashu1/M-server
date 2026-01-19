import axios from "axios";
import { prismaClient } from "../../client/db/index.js";
import JWTServices from "../../services/jwt.js";
import type { GraphqlContext } from "../../interface.js";


interface GoogleTokenResult {
  iss: string;
  azp: string;
  aud: string;
  sub: string;

  email: string;
  email_verified: boolean;

  name?: string;
  picture?: string;
  given_name?: string;
  family_name?: string;

  nbf?: number;
  iat: number;
  exp: number;

  jti?: string;
  alg?: string;
  kid?: string;
  typ?: string;
}


const queries = {
  verifyGoogleToken: async (
    parent: any,
    { token }: { token: string }
  ) => {
    const googleOauthURL = new URL(
      "https://oauth2.googleapis.com/tokeninfo"
    );

    googleOauthURL.searchParams.set("id_token", token);

    const { data } = await axios.get<GoogleTokenResult>(googleOauthURL.toString(), {
      responseType: "json",
    });
    
     {/*To Check If User already exist or not & if not create one*/}
     const user = await prismaClient.user.findUnique({
        where: {email: data.email},
     });
    
      if(!user){
        await prismaClient.user.create({
           data: {
                    email: data.email,
                     firstName: data.given_name ?? "User",
                    lastName: data.family_name ?? null,
                      profileImageURL: data.picture ?? null,
                  },
          });
      }


      const userInDb = await prismaClient.user.findUnique({ where: { email: data.email } });
          if(!userInDb) throw new Error('User WithEmail not found')
      const userToken =JWTServices.generateTokenForUser(userInDb)
          return userToken;
  },

  getCurrentUser: async( parent: any, args:any,ctx:GraphqlContext) =>{
    
    const id=ctx.user?.id;
    if(!id) return null;

    const user =await prismaClient.user.findUnique({where:{id}})
    return user;
  },


};

export const resolvers = { queries };