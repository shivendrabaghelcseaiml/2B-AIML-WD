const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

// Sample data
let users = [
    { id: "1", name: "Shivendra", age: 20 },
    { id: "2", name: "Rahul", age: 21 }
];

// Define GraphQL Schema
const schema = buildSchema(`
    type User {
        id: ID!
        name: String!
        age: Int!
    }

    type Query {
        getUsers: [User]
        getUser(id: ID!): User
    }

    type Mutation {
        addUser(name: String!, age: Int!): User
    }
`);

// Define Resolvers
const root = {
    getUsers: () => {
        return users;
    },

    getUser: (args) => {
        return users.find(user => user.id === args.id);
    },

    addUser: (args) => {
        const newUser = {
            id: String(users.length + 1),
            name: args.name,
            age: args.age
        };

        users.push(newUser);
        return newUser;
    }
};

// GraphQL Endpoint
app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

// Start Server
app.listen(4000, () => {
    console.log("Server running at http://localhost:4000/graphql");
});