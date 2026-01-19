import type { GraphqlContext } from "../../interface.js";
export declare const resolvers: {
    queries: {
        verifyGoogleToken: (parent: any, { token }: {
            token: string;
        }) => Promise<string>;
        getCurrentUser: (parent: any, args: any, ctx: GraphqlContext) => Promise<{
            id: string;
            email: string;
            firstName: string;
            lastName: string | null;
            profileImageURL: string | null;
            createdAt: Date;
            updatedAt: Date;
        } | null>;
    };
};
//# sourceMappingURL=resolvers.d.ts.map