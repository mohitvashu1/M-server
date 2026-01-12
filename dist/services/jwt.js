import jwt from "jsonwebtoken";
import { prismaClient } from "../client/db/index.js";
import { JWT_SECRET } from "../config/env.js";
class JWTServices {
    static async generateTokenForUser(userId) {
        const user = await prismaClient.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
            },
        });
        if (!user) {
            throw new Error("User not found");
        }
        const payload = {
            id: user.id,
            email: user.email,
        };
        return jwt.sign(payload, JWT_SECRET, {
            expiresIn: "7d",
        });
    }
    static verifyToken(token) {
        return jwt.verify(token, JWT_SECRET);
    }
}
export default JWTServices;
//# sourceMappingURL=jwt.js.map