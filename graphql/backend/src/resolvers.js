const User = require('./User');
//User.find(), User.create and etc are mongodb instructions!
//Pretty simple, tho. 🤔

module.exports = {
    Query: {
        users: () => User.find(),
        user: (_, { id }) => User.findById(id),
    },

    Mutation: {
        createUser: (_, { name, email }) => User.create({ name, email })
    }
};