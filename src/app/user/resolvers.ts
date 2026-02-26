import type { GraphqlContext } from "../../interface.js";
import type { User } from "@prisma/client";

import UserService from "../../services/user.js";
import TweetService from "../../services/tweet.js";
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
  createTweet: async (
    parent: any,
    { payload }: any,
    ctx: GraphqlContext
  ) => {
    const userId = ctx.user?.id;
    if (!userId) throw new Error("Unauthorized");

    return TweetService.createTweet({
      content: payload.content,
      imageURL: payload.imageURL,
      userId,
    });
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
  },
};

export const resolvers = {
  Query: queries,
  Mutation: mutations,
  User: extraResolvers.User,
};