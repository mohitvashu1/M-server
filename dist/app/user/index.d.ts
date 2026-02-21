export declare const User: {
    types: string;
    queries: string;
    resolvers: {
        queries: {
            verifyGoogleToken: (parent: any, { token }: {
                token: string;
            }) => Promise<string>;
            getCurrentUser: (parent: any, args: any, ctx: import("../../interface.js").GraphqlContext) => Promise<({
                tweets: ({
                    author: {
                        id: string;
                        firstName: string;
                        lastName: string | null;
                        email: string;
                        profileImageURL: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                } & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    content: string;
                    imageURL: string | null;
                    authorId: string;
                })[];
            } & {
                id: string;
                firstName: string;
                lastName: string | null;
                email: string;
                profileImageURL: string | null;
                createdAt: Date;
                updatedAt: Date;
            }) | null>;
        };
    };
};
//# sourceMappingURL=index.d.ts.map