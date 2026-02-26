import { prismaClient } from "../client/db/index.js";

export interface CreateTweetPayload {
  content: string;
  imageURL?: string;
  userId: string;
}

class TweetService {
  public static createTweet(data: CreateTweetPayload) {
    return prismaClient.tweet.create({
      data: {
        content: data.content,
        imageURL: data.imageURL ?? null,
        author: { connect: { id: data.userId } },
      },
      include: {
        author: true,
      },
    });
  }

  public static getAllTweets() {
    return prismaClient.tweet.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        author: true,
      },
    });
  }
}

export default TweetService;