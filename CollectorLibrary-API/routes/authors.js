var routes = require('express').Router();

var AuthorCtrl = require('../controllers/authors');

routes.get('/authors', AuthorCtrl.getAuthors);
routes.post('/authors', AuthorCtrl.createAuthor);

module.exports = routes;
