let books = require('./books.json')

export const fetchBooks = () => {
    return books
}

export const findBook = (id) => {
    return books.find(book => book.id == req.params.id)
}

export const createBook = ({title,author,price,summary}) => {
    let book = {title,author,price,summary}
    book.id = books.length + 1
    books.push(book)
    return book
}
