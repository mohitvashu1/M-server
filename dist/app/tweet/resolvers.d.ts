import type { GraphqlContext } from "../../interface.js";
export interface CreateTweetPayload {
    content: string;
    imageURL?: string;
}
export declare const resolvers: {
    mutations: {
        createTweet: (parent: any, { payload }: {
            payload: CreateTweetPayload;
        }, ctx: GraphqlContext) => Promise<{
            id: string;
            createdAt: Date;
            updatedAt: Date;
            content: string;
            imageURL: string | null;
            authorId: string;
        }>;
    };
};
//# sourceMappingURL=resolvers.d.ts.map