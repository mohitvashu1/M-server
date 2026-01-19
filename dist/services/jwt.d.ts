import type { User } from "@prisma/client";
import type { JWTUser } from "../interface.js";
declare class JWTServices {
    static generateTokenForUser(user: User): string;
    static decodeToken(token: string): JWTUser;
}
export default JWTServices;
//# sourceMappingURL=jwt.d.ts.map