import { prismaClient } from "../../client/db/index.js";
import { uploadToCloudinary } from "../../services/cloudinary.js";
const queries = {
    getAllTweets: async () => {
        return prismaClient.tweet.findMany({
            orderBy: { createdAt: "desc" },
        });
    },
};
const mutations = {
    createTweet: async (parent, { payload }, ctx) => {
        if (!ctx.user)
            throw new Error("You are not authenticated");
        let uploadedUrl = null;
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
        author: (parent) => {
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
//# sourceMappingURL=resolvers.js.map