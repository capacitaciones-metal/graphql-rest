const express = require('express');
const app = express();
app.use(express.json())
const {fetchBooks,findBook,createBook, updateBook} = require('./book-service')

app.get("/hello", (req, res) => {
        res.send('Hello world!')
    }
)

app.get("/book", (req, res) => {
    res.json(fetchBooks())
})

app.get("/book/:id", (req, res) => {
    res.json(findBook(req.params.id))
})

app.post("/book", (req, res) => {
    res.json(createBook(req.body))
})

app.put("/book/:id", (req, res) => {
    res.json(updateBook(req.params.id, req.body))
})


app.listen({port: 5000}, () =>
    console.log('http://localhost:5000')
);
