export declare const Tweet: {
    types: string;
    mutations: string;
    resolvers: {
        Query: {
            getAllTweets: () => Promise<({
                author: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    firstName: string;
                    lastName: string | null;
                    email: string;
                    profileImageURL: string | null;
                };
            } & {
                id: string;
                content: string;
                imageURL: string | null;
                authorId: string;
                createdAt: Date;
                updatedAt: Date;
            })[]>;
        };
        Mutation: {
            createTweet: (parent: any, { payload }: any, ctx: import("../../interface.js").GraphqlContext) => Promise<{
                author: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    firstName: string;
                    lastName: string | null;
                    email: string;
                    profileImageURL: string | null;
                };
            } & {
                id: string;
                content: string;
                imageURL: string | null;
                authorId: string;
                createdAt: Date;
                updatedAt: Date;
            }>;
        };
        Tweet: {};
    };
    queries: string;
};
//# sourceMappingURL=index.d.ts.map