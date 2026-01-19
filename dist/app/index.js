import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express4";
import cors from "cors";
import { User } from "./user/index.js";
import JWTServices from "../services/jwt.js";
export async function initServer() {
    const app = express();
    const server = new ApolloServer({
        typeDefs: `

    ${User.types}
      type Query {
        ${User.queries}
      }
    `,
        resolvers: {
            Query: {
                ...User.resolvers.queries,
                //https://studio.apollographql.com/sandbox/explorer
            },
        },
    });
    await server.start();
    const corsOptions = {
        origin: "*",
        methods: ["POST", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    };
    app.options("/graphql", cors(corsOptions));
    app.use("/graphql", cors(corsOptions), express.json(), expressMiddleware(server, {
        context: async ({ req, res }) => {
            return {
                user: req.headers.authorization
                    ? JWTServices.decodeToken(req.headers.authorization.split("Bearer ")[1])
                    : undefined,
            };
        },
    }));
    return app;
}
//# sourceMappingURL=index.js.map