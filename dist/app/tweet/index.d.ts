export declare const Tweet: {
    types: string;
    mutations: string;
    resolvers: {
        mutations: {
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
};
//# sourceMappingURL=index.d.ts.map