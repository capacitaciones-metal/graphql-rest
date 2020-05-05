const express = require('express');
const {ApolloServer, gql} = require('apollo-server-express');
const {fetchBooks, findBook, createBook, updateBook} = require('./book-service')

const typeDefs = gql`

    type Book{
        id: ID!
        title: String!
        author: String!
        price: Float!
        summary: String
    }

    type Query {
        hello: String
        books: [Book]
        book(id:ID!): Book
    }

    input BookInput{
        title: String!
        author: String!
        price: Float!
        summary: String
    }

    type Mutation{
        createBook(input:BookInput):Book
        updateBook(id:ID, input: BookInput): Book
    }

`;

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        books: () => fetchBooks(),
        book: (_, {id}) => {
            return findBook(id)
        }
    },
    Mutation: {
        createBook: (_, {input}) => {
            return createBook(input)
        },
        updateBook: (_, {id,input}) => {
            return updateBook(id, input)
        }
    }
};

const server = new ApolloServer({typeDefs, resolvers});

const app = express();
server.applyMiddleware({app});

app.listen({port: 4000}, () =>
    console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);
