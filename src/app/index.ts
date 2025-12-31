import express from 'express';
import {ApolloServer}  from '@apollo/server';
import {expressMiddleware} from '@as-integrations/express4';



 export async function initServer() {

    const app =express();
    const graphqlServer= new ApolloServer({
  typeDefs :`
  type Query{
  sayHello:String
  }` ,
  resolvers:{
    Query:{
      sayHello:() => `Hello From Mohit To GraphQl Server`
    },
  },  
});
await graphqlServer.start();

app.use("/graphql",expressMiddleware(graphqlServer))
    
   return app;
}