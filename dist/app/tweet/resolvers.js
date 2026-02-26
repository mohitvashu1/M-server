import TweetService from "../../services/tweet.js";
const Query = {
    getAllTweets: async () => {
        return TweetService.getAllTweets();
    },
};
const Mutation = {
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
const TweetType = {};
export const resolvers = {
    Query,
    Mutation,
    Tweet: TweetType,
};
//# sourceMappingURL=resolvers.js.map