var routes = require('express').Router();

var booksController = require('../controllers/books');

routes.get('/books/:isbn', booksController.getBookByIsbn);
routes.post('/books', booksController.createBook);

module.exports = routes;