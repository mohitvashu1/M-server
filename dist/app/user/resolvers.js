import axios from "axios";
import { prismaClient } from "../../client/db/index.js";
const queries = {
    verifyGoogleToken: async (parent, { token }) => {
        const googleOauthURL = new URL("https://oauth2.googleapis.com/tokeninfo");
        googleOauthURL.searchParams.set("id_token", token);
        const { data } = await axios.get(googleOauthURL.toString(), {
            responseType: "json",
        });
        { /*To Check If User already exist or not & if not create one*/ }
        const user = await prismaClient.user.findUnique({
            where: { email: data.email },
        });
        if (!user) {
            await prismaClient.user.create({
                data: {
                    email: data.email,
                    firstName: data.given_name ?? "User",
                    lastName: data.family_name ?? null,
                    profileImageURL: data.picture ?? null,
                },
            });
        }
        return "OK";
    },
};
export const resolvers = { queries };
//# sourceMappingURL=resolvers.js.map