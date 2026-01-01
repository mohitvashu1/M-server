import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express4";
import cors from "cors";

export async function initServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs: `
      type Query {
        sayHello: String
        sayHelloToMe(name:String!):String
      }
    `,
    resolvers: {
      Query: {
        sayHello: () => "Hello From Mohit To GraphQL Server",
        sayHelloToMe:(parent:any,{name}: {name:string}) => `Hey ${name}`          
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

  app.use(
    "/graphql",
    cors(corsOptions),
    express.json(),
    expressMiddleware(server)
  );

  return app;
}
