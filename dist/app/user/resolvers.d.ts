import type { GraphqlContext } from "../../interface.js";
import type { User } from "@prisma/client";
export declare const resolvers: {
    queries: {
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
        }, ctx: GraphqlContext) => Promise<({
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
    extraResolvers: {
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
        };
    };
};
//# sourceMappingURL=resolvers.d.ts.map