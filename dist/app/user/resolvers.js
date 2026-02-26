import axios from "axios";
import { prismaClient } from "../../client/db/index.js";
import JWTServices from "../../services/jwt.js";
const queries = {
    verifyGoogleToken: async (parent, { token }) => {
        const googleOauthURL = new URL("https://oauth2.googleapis.com/tokeninfo");
        googleOauthURL.searchParams.set("id_token", token);
        const { data } = await axios.get(googleOauthURL.toString(), { responseType: "json" });
        let user = await prismaClient.user.findUnique({
            where: { email: data.email },
        });
        if (!user) {
            user = await prismaClient.user.create({
                data: {
                    email: data.email,
                    firstName: data.given_name ?? "User",
                    lastName: data.family_name ?? "",
                    profileImageURL: data.picture ?? "",
                },
            });
        }
        const userToken = JWTServices.generateTokenForUser(user);
        return userToken;
    },
    getCurrentUser: async (parent, args, ctx) => {
        const id = ctx.user?.id;
        if (!id)
            return null;
        const user = await prismaClient.user.findUnique({
            where: { id },
            include: {
                tweets: {
                    orderBy: {
                        createdAt: "desc",
                    },
                    include: {
                        author: true,
                    },
                },
            },
        });
        return user;
    },
    getUserById: async (parent, { id }, ctx) => prismaClient.user.findUnique({
        where: { id },
        include: {
            tweets: {
                orderBy: {
                    createdAt: "desc",
                },
                include: {
                    author: true,
                },
            },
        },
    }),
};
const extraResolvers = {
    User: {
        tweets: (parent) => prismaClient.tweet.findMany({
            where: { authorId: parent.id },
            orderBy: {
                createdAt: "desc",
            },
            include: {
                author: true,
            },
        }),
    },
};
export const resolvers = { queries, extraResolvers };
//# sourceMappingURL=resolvers.js.map