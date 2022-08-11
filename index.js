const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

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
        console.log("MongoDB connected");
        return server.listen({ port: port})
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`);
    })




