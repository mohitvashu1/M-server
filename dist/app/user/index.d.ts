export declare const User: {
    types: string;
    queries: string;
    resolvers: {
        Query: {
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
            getUserById: (parent: any, { id }: {
                id: string;
            }) => Promise<({
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
        Mutation: {
            followUser: (parent: any, { to }: {
                to: string;
            }, ctx: import("../../interface.js").GraphqlContext) => Promise<boolean>;
            unfollowUser: (parent: any, { to }: {
                to: string;
            }, ctx: import("../../interface.js").GraphqlContext) => Promise<boolean>;
        };
        User: {
            tweets: (parent: import("@prisma/client").User) => import("@prisma/client").Prisma.PrismaPromise<({
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
            followers: (parent: import("@prisma/client").User) => Promise<{
                id: string;
                firstName: string;
                lastName: string | null;
                email: string;
                profileImageURL: string | null;
                createdAt: Date;
                updatedAt: Date;
            }[]>;
            following: (parent: import("@prisma/client").User) => Promise<{
                id: string;
                firstName: string;
                lastName: string | null;
                email: string;
                profileImageURL: string | null;
                createdAt: Date;
                updatedAt: Date;
            }[]>;
        };
    };
    mutations: string;
};
//# sourceMappingURL=index.d.ts.map