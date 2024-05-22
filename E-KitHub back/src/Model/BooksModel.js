import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({
    title: String,
    author: String,
    published_year: Number,
    genre: String,
    summary: String,
    pdf_url: String,
    image: String,
    price: Number

});
export const BookModel = mongoose.model("BookModel", bookSchema);