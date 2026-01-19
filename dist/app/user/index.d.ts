export declare const User: {
    types: string;
    queries: string;
    resolvers: {
        queries: {
            verifyGoogleToken: (parent: any, { token }: {
                token: string;
            }) => Promise<string>;
            getCurrentUser: (parent: any, args: any, ctx: import("../../interface.js").GraphqlContext) => Promise<{
                id: string;
                firstName: string;
                lastName: string | null;
                email: string;
                profileImageURL: string | null;
                createdAt: Date;
                updatedAt: Date;
            } | null>;
        };
    };
};
//# sourceMappingURL=index.d.ts.map