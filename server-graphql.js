const express = require('express');
const {ApolloServer, gql} = require('apollo-server-express');
let books = require('./books.json')

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
    }

`;

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        books: () => books,
        book: (_, {id}) => {
            return books.find(book => book.id == id)
        }
    },
    Mutation: {
        createBook:(_,{input}) => {
            let book = input
            book.id = books.length + 1
            books.push(book)
            return book
        }
    }
};

const server = new ApolloServer({typeDefs, resolvers});

const app = express();
server.applyMiddleware({app});

app.listen({port: 4000}, () =>
    console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);
