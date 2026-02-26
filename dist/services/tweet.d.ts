export interface CreateTweetPayload {
    content: string;
    imageURL?: string;
    userId: string;
}
declare class TweetService {
    static createTweet(data: CreateTweetPayload): import("@prisma/client").Prisma.Prisma__TweetClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs, {
        log: "query"[];
    }>;
    static getAllTweets(): import("@prisma/client").Prisma.PrismaPromise<({
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
}
export default TweetService;
//# sourceMappingURL=tweet.d.ts.map