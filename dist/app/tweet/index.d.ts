export declare const Tweet: {
    types: string;
    mutations: string;
    resolvers: {
        Tweet: {
            author: (parent: import("@prisma/client").Tweet) => import("@prisma/client").Prisma.Prisma__UserClient<{
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
        };
        Query: {
            getAllTweets: () => import("@prisma/client").Prisma.PrismaPromise<{
                id: string;
                createdAt: Date;
                updatedAt: Date;
                content: string;
                imageURL: string | null;
                authorId: string;
            }[]>;
        };
        Mutation: {
            createTweet: (parent: any, { payload }: {
                payload: import("./resolvers.js").CreateTweetPayload;
            }, ctx: import("../../interface.js").GraphqlContext) => Promise<{
                id: string;
                createdAt: Date;
                updatedAt: Date;
                content: string;
                imageURL: string | null;
                authorId: string;
            }>;
        };
    };
    queries: string;
};
//# sourceMappingURL=index.d.ts.map