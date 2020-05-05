const express = require('express');
const app = express();
let books = require('./books.json')

app.get("/hello", (req,res) =>{
    res.send('Hello world!')
}
)

app.get("/book", (req,res) =>{
    res.json(books)
})

app.get("/book/:id", (req,res) =>{
    let book = books.find(book => book.id == req.params.id)
    res.json(book)
})

app.listen({ port: 5000 }, () =>
    console.log('http://localhost:5000')
);
