import { prismaClient } from "../client/db/index.js";
class TweetService {
    static createTweet(data) {
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
    static getAllTweets() {
        return prismaClient.tweet.findMany({
            orderBy: { createdAt: "desc" },
            include: {
                author: true,
            },
        });
    }
}
export default TweetService;
//# sourceMappingURL=tweet.js.map