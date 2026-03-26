const { Book } = require('../models');

let getBookByIsbn = async (request, response) => {
  try {
    const { isbn } = request.params;
    let book = await Book.findOne({ where: { isbn } });
    if (!book) {
      response.status(204).json({
        status: 204,
        message: 'No se encontró el libro'
      })
    } else {
      response.status(200).json({
        status: 200,
        data: book
      })
    }
  } catch (error) {
    response.status(500).json({
      status: 500,
      message: 'Error al buscar el libro',
      error: error.message
    })
  }
}

let createBook = async (request, response) => {
  try {
    if(request.body.title === undefined || request.body.title === "" || request.body.isbn === undefined || request.body.isbn === "") {
      response.status(406).json({
        status: 406,
        message: 'Por favor ingresa el título y ISBN del libro'
      })
    } else {
      let newBook = await Book.create(request.body);
      response.status(201).json({
        status: 201,
        data: newBook
      })
    }
  } catch (error) {
    response.status(500).json({
      status: 500,
      message: 'Error al crear el libro',
      error: error.message
    })
  }
}

module.exports = {
  getBookByIsbn,
  createBook,
}