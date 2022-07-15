const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const routes = require("./routes")
let port = 5000;


const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { MONGODB } = require('./config.js');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
});

mongoose.connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        const app = express();
        app.use("/api", routes);
        console.log("MongoDB connected");
        return server.listen({ port: port})
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`);
    })




