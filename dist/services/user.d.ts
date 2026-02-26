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
}
export default UserService;
//# sourceMappingURL=user.d.ts.map