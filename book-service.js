let books = require('./books.json')

module.exports.fetchBooks = () => {
    return books
}

module.exports.findBook = (id) => {
    return books.find(book => book.id == id)
}

module.exports.createBook = ({title,author,price,summary}) => {
    let book = {title,author,price,summary}
    book.id = books.length + 1
    books.push(book)
    return book
}

module.exports.updateBook = (id, {title,author,price,summary}) => {
    let index = books.findIndex(book => book.id == id)
    books[index] = {id,title,author,price,summary}
    return books[index]
}
