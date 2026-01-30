import type { Tweet } from "@prisma/client";
import { prismaClient } from "../../client/db/index.js";
import type { GraphqlContext } from "../../interface.js";

export interface CreateTweetPayload {
  content: string;
  imageURL?: string;
}

const queries = {
  getAllTweets: () =>
    prismaClient.tweet.findMany({ orderBy: { createdAt: "desc" } }),
};

const mutations = {
  createTweet: async (
    parent: any,
    { payload }: { payload: CreateTweetPayload },
    ctx: GraphqlContext
  ) => {
    if (!ctx.user) throw new Error("You are not authenticated");
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
    author: (parent: Tweet) =>
      prismaClient.user.findUnique({ where: { id: parent.authorId } }),
  },
};

export const resolvers = {
  Query: queries,
  Mutation: mutations,
  ...extraResolvers,
};