import jwt from "jsonwebtoken";
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
    static decodeToken(token) {
        return jwt.verify(token, JWT_SECRET);
    }
}
export default JWTServices;
//# sourceMappingURL=jwt.js.map