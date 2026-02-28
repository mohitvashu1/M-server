import type { GraphqlContext } from "../../interface.js";
import type { User } from "@prisma/client";
import UserService from "../../services/user.js";
import { prismaClient } from "../../client/db/index.js";

const queries = {
  verifyGoogleToken: async (
    parent: any,
    { token }: { token: string }
  ) => {
    return UserService.verifyGoogleAuthToken(token);
  },

  getCurrentUser: async (
    parent: any,
    args: any,
    ctx: GraphqlContext
  ) => {
    const id = ctx.user?.id;
    if (!id) return null;

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

  getUserById: async (
    parent: any,
    { id }: { id: string }
  ) => {
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
 followUser: async (
    parent: any,
    { to }: { to: string },
    ctx: GraphqlContext
  ) => {
    if (!ctx.user || !ctx.user.id) throw new Error("unauthenticated");
    await UserService.followUser(ctx.user.id, to);
    return true;
  },
  unfollowUser: async (
    parent: any,
    { to }: { to: string },
    ctx: GraphqlContext
  ) => {
    if (!ctx.user || !ctx.user.id) throw new Error("unauthenticated");
    await UserService.unfollowUser(ctx.user.id, to);
    return true;
  },
};
  

const extraResolvers = {
  User: {
    tweets: (parent: User) =>
      prismaClient.tweet.findMany({
        where: { authorId: parent.id },
        orderBy: { createdAt: "desc" },
        include: { author: true },
      }),
      followers: async (parent: User) => {
      const result = await prismaClient.follows.findMany({
        where: { following: { id: parent.id } },
        include: {
          follower: true,
        },
      });
      return result.map((el) => el.follower);
    },
    following: async (parent: User) => {
      const result = await prismaClient.follows.findMany({
        where: { follower: { id: parent.id } },
        include: {
          following: true,
        },
      });
      return result.map((el) => el.following);
    },
  },
};

export const resolvers = {
  Query: queries,
  Mutation: mutations,
  User: extraResolvers.User,
};