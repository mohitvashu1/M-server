import jwt from "jsonwebtoken";
import { prismaClient } from "../client/db/index.js";
import { JWT_SECRET } from "../config/env.js";
class JWTServices {
    static generateTokenForUser(user) {
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