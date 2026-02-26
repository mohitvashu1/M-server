import axios from "axios";
import { prismaClient } from "../client/db/index.js";
import JWTService from "./jwt.js";
class UserService {
    static async verifyGoogleAuthToken(token) {
        const googleToken = token;
        const googleOauthURL = new URL("https://oauth2.googleapis.com/tokeninfo");
        googleOauthURL.searchParams.set("id_token", googleToken);
        const { data } = await axios.get(googleOauthURL.toString(), {
            responseType: "json",
        });
        const user = await prismaClient.user.findUnique({
            where: { email: data.email },
        });
        if (!user) {
            await prismaClient.user.create({
                data: {
                    email: data.email,
                    firstName: data.given_name,
                    lastName: data.family_name ?? null,
                    profileImageURL: data.picture ?? null,
                },
            });
        }
        const userInDb = await prismaClient.user.findUnique({
            where: { email: data.email },
        });
        if (!userInDb)
            throw new Error("User with email not found");
        const userToken = JWTService.generateTokenForUser(userInDb);
        return userToken;
    }
    static getUserById(id) {
        return prismaClient.user.findUnique({ where: { id } });
    }
}
export default UserService;
//# sourceMappingURL=user.js.map