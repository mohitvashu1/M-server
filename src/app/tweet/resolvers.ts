import type { GraphqlContext } from "../../interface.js";
import TweetService from "../../services/tweet.js";

const Query = {
  getAllTweets: async () => {
    return TweetService.getAllTweets();
  },
};

const Mutation = {
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

const TweetType = {};

export const resolvers = {
  Query,
  Mutation,
  Tweet: TweetType,
};