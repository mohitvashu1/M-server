import { prismaClient } from "../../client/db/index.js";
const queries = {
    getAllTweets: () => prismaClient.tweet.findMany({ orderBy: { createdAt: "desc" } }),
};
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
const extraResolvers = {
    Tweet: {
        author: (parent) => prismaClient.user.findUnique({ where: { id: parent.authorId } }),
    },
};
export const resolvers = {
    Query: queries,
    Mutation: mutations,
    ...extraResolvers,
};
//# sourceMappingURL=resolvers.js.map