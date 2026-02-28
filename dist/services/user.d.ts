declare class UserService {
    static verifyGoogleAuthToken(token: string): Promise<string>;
    static getUserById(id: string): import("@prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        firstName: string;
        lastName: string | null;
        email: string;
        profileImageURL: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
        log: "query"[];
    }>;
    static followUser(from: string, to: string): Promise<void>;
    static unfollowUser(from: string, to: string): Promise<void>;
}
export default UserService;
//# sourceMappingURL=user.d.ts.map