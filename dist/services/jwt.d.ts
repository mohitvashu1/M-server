import type { User } from "@prisma/client";
interface JwtPayload {
    id: string;
    email: string;
}
declare class JWTServices {
    static generateTokenForUser(user: User): string;
    static verifyToken(token: string): JwtPayload;
}
export default JWTServices;
//# sourceMappingURL=jwt.d.ts.map