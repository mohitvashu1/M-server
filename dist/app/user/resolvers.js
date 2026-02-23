import axios from "axios";
import { prismaClient } from "../../client/db/index.js";
import JWTServices from "../../services/jwt.js";
const queries = {
    verifyGoogleToken: async (parent, { token }) => {
        const googleOauthURL = new URL("https://oauth2.googleapis.com/tokeninfo");
        googleOauthURL.searchParams.set("id_token", token);
        const { data } = await axios.get(googleOauthURL.toString(), { responseType: "json" });
        // Check if user exists
        let user = await prismaClient.user.findUnique({
            where: { email: data.email },
        });
        // If not, create
        if (!user) {
            user = await prismaClient.user.create({
                data: {
                    email: data.email,
                    firstName: data.given_name ?? "User",
                    lastName: data.family_name ?? null,
                    profileImageURL: data.picture ?? null,
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
                include: {
                    author: true,
                },
            },
        },
    }),
};
const extraResolvers = {
    User: {
        tweets: (parent) => prismaClient.tweet.findMany({ where: { id: parent.id } }),
    },
};
export const resolvers = { queries, extraResolvers };
//# sourceMappingURL=resolvers.js.map