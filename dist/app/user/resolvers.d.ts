import type { GraphqlContext } from "../../interface.js";
import type { User } from "@prisma/client";
export declare const resolvers: {
    Query: {
        verifyGoogleToken: (parent: any, { token }: {
            token: string;
        }) => Promise<string>;
        getCurrentUser: (parent: any, args: any, ctx: GraphqlContext) => Promise<({
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
        }, ctx: GraphqlContext) => Promise<boolean>;
        unfollowUser: (parent: any, { to }: {
            to: string;
        }, ctx: GraphqlContext) => Promise<boolean>;
    };
    User: {
        tweets: (parent: User) => import("@prisma/client").Prisma.PrismaPromise<({
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
        followers: (parent: User) => Promise<{
            id: string;
            firstName: string;
            lastName: string | null;
            email: string;
            profileImageURL: string | null;
            createdAt: Date;
            updatedAt: Date;
        }[]>;
        following: (parent: User) => Promise<{
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
//# sourceMappingURL=resolvers.d.ts.map