import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express4";
import cors from "cors";
import { User } from "./user/index.js";
import JWTServices from "../services/jwt.js";
import { Tweet } from "./tweet/index.js";
export async function initServer() {
    const app = express();
    const server = new ApolloServer({
        typeDefs: `
      ${User.types}
      ${Tweet.types}
      type Query {
        ${User.queries}
      }

      type Mutation{
      ${Tweet.mutations} 
      }
    `,
        resolvers: {
            Query: {
                ...User.resolvers.queries,
            },
            Mutation: {
                ...Tweet.resolvers.mutations
            }
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
        context: async ({ req }) => {
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                return { user: null };
            }
            try {
                // Expect: "Bearer <token>"
                const token = authHeader.split(" ")[1];
                if (!token)
                    return { user: null };
                const user = JWTServices.decodeToken(token); // ONLY your app JWT
                return { user };
            }
            catch (error) {
                // 👇 CRITICAL: never crash context
                console.warn("Invalid JWT:", error);
                return { user: null };
            }
        },
    }));
    return app;
}
//# sourceMappingURL=index.js.map