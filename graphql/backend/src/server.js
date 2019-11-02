const { GraphQLServer } = require('graphql-yoga');
const path =  require('path');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/graphqlnode',
    { useNewUrlParser: true }
);

/**
 * So, resolvers seems to be some kind of controller for
 * our schemas. 🤔
 * Can be created on the object, but is more confortable to
 * to it on an separated file.
 */
const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
});

server.start();