interface JwtPayload {
    id: string;
    email: string;
}
declare class JWTServices {
    static generateTokenForUser(userId: string): Promise<string>;
    static verifyToken(token: string): JwtPayload;
}
export default JWTServices;
//# sourceMappingURL=jwt.d.ts.map