import { prismaClient } from "../../client/db/index.js";
import type { GraphqlContext } from "../../interface.js";



  export  interface CreateTweetPayload{
        content:string;
        imageURL?:string;
    }
    const mutations={
    createTweet: async(
        parent:any,
        {payload}:{payload:CreateTweetPayload},
        ctx:GraphqlContext
    )=>{
        if(!ctx.user) throw new Error("You are not authenticated");
       const tweet = await prismaClient.tweet.create({
            data: {
                content: payload.content,
                imageURL: payload.imageURL ?? null ,
                author:{connect:{id: ctx.user.id}}, 
            },
        });
        return tweet
    },
};

export const resolvers ={mutations};