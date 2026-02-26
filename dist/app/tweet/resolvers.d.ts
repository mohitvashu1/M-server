import type { GraphqlContext } from "../../interface.js";
export declare const resolvers: {
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
        createTweet: (parent: any, { payload }: any, ctx: GraphqlContext) => Promise<{
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
//# sourceMappingURL=resolvers.d.ts.map