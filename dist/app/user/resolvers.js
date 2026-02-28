import UserService from "../../services/user.js";
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
                followers: {
                    include: {
                        follower: true,
                    },
                },
                following: {
                    include: {
                        following: true,
                    },
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
                followers: {
                    include: {
                        follower: true,
                    },
                },
                following: {
                    include: {
                        following: true,
                    },
                },
            },
        });
    },
};
const mutations = {
    followUser: async (parent, { to }, ctx) => {
        if (!ctx.user?.id)
            throw new Error("unauthenticated");
        await UserService.followUser(ctx.user.id, to);
        return true;
    },
    unfollowUser: async (parent, { to }, ctx) => {
        if (!ctx.user?.id)
            throw new Error("unauthenticated");
        await UserService.unfollowUser(ctx.user.id, to);
        return true;
    },
};
const extraResolvers = {
    User: {
        tweets: async (parent) => {
            if (parent.tweets)
                return parent.tweets;
            if (!parent?.id)
                return [];
            return prismaClient.tweet.findMany({
                where: { authorId: parent.id },
                orderBy: { createdAt: "desc" },
                include: { author: true },
            });
        },
        followers: async (parent) => {
            const rows = await prismaClient.follows.findMany({
                where: { followingId: parent.id },
                include: { follower: true },
            });
            return rows
                .map(row => row.follower)
                .filter(user => user !== null);
        },
        following: async (parent) => {
            const rows = await prismaClient.follows.findMany({
                where: { followerId: parent.id },
                include: { following: true },
            });
            return rows
                .map(row => row.following)
                .filter(user => user !== null);
        },
    },
};
export const resolvers = {
    Query: queries,
    Mutation: mutations,
    User: extraResolvers.User,
};
//# sourceMappingURL=resolvers.js.map