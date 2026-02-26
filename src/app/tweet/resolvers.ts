import type { Tweet } from "@prisma/client";
import { prismaClient } from "../../client/db/index.js";
import type { GraphqlContext } from "../../interface.js";
import { uploadToCloudinary } from "../../services/cloudinary.js";

const queries = {
  getAllTweets: async () => {
    return prismaClient.tweet.findMany({
      orderBy: { createdAt: "desc" },
    });
  },
};

const mutations = {
  createTweet: async (
  parent: any,
  { payload }: { payload: { content: string; imageURL?: string } },
  ctx: GraphqlContext
) => {
  if (!ctx.user) throw new Error("You are not authenticated");

  let uploadedUrl: string | null = null;

  if (payload.imageURL) {
    uploadedUrl = await uploadToCloudinary(payload.imageURL);
  }

  const tweet = await prismaClient.tweet.create({
    data: {
      content: payload.content,
      imageURL: uploadedUrl,
      author: { connect: { id: ctx.user.id } },
    },
  });

  return tweet;
}
};

const extraResolvers = {
  Tweet: {
    author: (parent: Tweet) => {
      return prismaClient.user.findUnique({
        where: { id: parent.authorId },
      });
    },
  },
};

export const resolvers = {
  Query: queries,
  Mutation: mutations,
  ...extraResolvers,
};