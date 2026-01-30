import type { Tweet } from "@prisma/client";
import type { GraphqlContext } from "../../interface.js";
export interface CreateTweetPayload {
    content: string;
    imageURL?: string;
}
export declare const resolvers: {
    Tweet: {
        author: (parent: Tweet) => import("@prisma/client").Prisma.Prisma__UserClient<{
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