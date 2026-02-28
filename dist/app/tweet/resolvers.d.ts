import type { GraphqlContext } from "../../interface.js";
export declare const resolvers: {
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
        createTweet: (parent: any, { payload }: any, ctx: GraphqlContext) => Promise<{
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
//# sourceMappingURL=resolvers.d.ts.map