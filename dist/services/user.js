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
    static async followUser(from, to) {
        if (from === to) {
            throw new Error("You cannot follow yourself");
        }
        try {
            await prismaClient.follows.create({
                data: {
                    followerId: from,
                    followingId: to,
                },
            });
        }
        catch (error) {
            if (error.code === "P2002") {
                return;
            }
            throw error;
        }
    }
    static async unfollowUser(from, to) {
        try {
            await prismaClient.follows.delete({
                where: {
                    followerId_followingId: {
                        followerId: from,
                        followingId: to,
                    },
                },
            });
        }
        catch (error) {
            if (error.code === "P2025") {
                return;
            }
            throw error;
        }
    }
}
export default UserService;
//# sourceMappingURL=user.js.map