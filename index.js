const { ApolloServer } = require("apollo-server-express");
const  typeDefs = require("./graphql/typeDefs");
const  resolvers = require("./graphql/resolvers");
const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;


let apolloServer;

async function startServer(){
  try{
    apolloServer = new ApolloServer({
      typeDefs:typeDefs,
      resolvers:resolvers
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({app})
    app.listen(PORT,()=>{
      console.log(`server is running on port ${PORT}`)
    })
  }catch(error){
    console.log(error);
    process.exit(1);
  }
}

startServer();



