import { prismaClient } from "../../client/db/index.js";
const mutations = {
    createTweet: async (parent, { payload }, ctx) => {
        if (!ctx.user)
            throw new Error("You are not authenticated");
        const tweet = await prismaClient.tweet.create({
            data: {
                content: payload.content,
                imageURL: payload.imageURL ?? null,
                author: { connect: { id: ctx.user.id } },
            },
        });
        return tweet;
    },
};
export const resolvers = { mutations };
//# sourceMappingURL=resolvers.js.map