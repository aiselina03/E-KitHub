import { BookModel } from "../Model/BooksModel.js";

export const getAllBooks = async (req, res) => {
    try {
        const books = await BookModel.find({});
        res.json(books)
    } catch (error) {
        res.send(error.message)
    }
}

export const getBook = async (req, res) => {
    try {
        const { id } = req.params
        const book = await BookModel.findById(id);
        res.json(book)
    } catch (error) {
        res.send(error.message);
    }
}

export const createBook = async (req, res) => {
    try {
        const { title, author, published_year, genre, summary, pdf_url, image, price } = req.body
        const newBook = new BookModel({ title, author, published_year, genre, summary, pdf_url, image, price })
        await newBook.save()
        res.status(200).json('book elave olundu!')
    } catch (error) {
        res.send(error.message)
    }
}

export const updateBook = async (req, res) => {
    try {
        const { id } = req.params
        const { title, author, published_year, genre, summary, pdf_url, image, price } = req.body
        const book = await BookModel.findByIdAndUpdate(id, { title, author, published_year, genre, summary, pdf_url, image, price });
        res.json(book)
    } catch (error) {
        res.send(error.message);
    }
}

export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params
        const book = await BookModel.findByIdAndDelete(id);
        res.json(book)
    } catch (error) {
        res.send(error.message);
    }
}