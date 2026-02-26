import UserService from "../../services/user.js";
import TweetService from "../../services/tweet.js";
import { prismaClient } from "../../client/db/index.js";
const queries = {
    verifyGoogleToken: async (parent, { token }) => {
        return UserService.verifyGoogleAuthToken(token);
    },
    getCurrentUser: async (parent, args, ctx) => {
        const id = ctx.user?.id;
        if (!id)
            return null;
        return prismaClient.user.findUnique({
            where: { id },
            include: {
                tweets: {
                    orderBy: { createdAt: "desc" },
                    include: { author: true },
                },
            },
        });
    },
    getUserById: async (parent, { id }) => {
        return prismaClient.user.findUnique({
            where: { id },
            include: {
                tweets: {
                    orderBy: { createdAt: "desc" },
                    include: { author: true },
                },
            },
        });
    },
};
const mutations = {
    createTweet: async (parent, { payload }, ctx) => {
        const userId = ctx.user?.id;
        if (!userId)
            throw new Error("Unauthorized");
        return TweetService.createTweet({
            content: payload.content,
            imageURL: payload.imageURL,
            userId,
        });
    },
};
const extraResolvers = {
    User: {
        tweets: (parent) => prismaClient.tweet.findMany({
            where: { authorId: parent.id },
            orderBy: { createdAt: "desc" },
            include: { author: true },
        }),
    },
};
export const resolvers = {
    Query: queries,
    Mutation: mutations,
    User: extraResolvers.User,
};
//# sourceMappingURL=resolvers.js.map