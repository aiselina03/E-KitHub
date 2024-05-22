import express from 'express'
import { createBook, deleteBook, getAllBooks, getBook, updateBook } from '../Controller/BooksController.js'

export const booksRouter = express.Router()

booksRouter.get('/', getAllBooks)
booksRouter.get('/:id', getBook)
booksRouter.post('/', createBook)
booksRouter.put('/:id', updateBook)
booksRouter.delete('/:id', deleteBook)