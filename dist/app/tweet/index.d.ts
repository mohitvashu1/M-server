export declare const Tweet: {
    types: string;
    mutations: string;
    resolvers: {
        Query: {
            getAllTweets: () => Promise<({
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
            })[]>;
        };
        Mutation: {
            createTweet: (parent: any, { payload }: any, ctx: import("../../interface.js").GraphqlContext) => Promise<{
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
            }>;
        };
        Tweet: {};
    };
    queries: string;
};
//# sourceMappingURL=index.d.ts.map