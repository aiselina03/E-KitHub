import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import 'dotenv/config'

import { userRouter } from "./src/Router/UserRouter.js";
import { authRouter } from "./src/Router/AuthRouter.js";
import { booksRouter } from "./src/Router/BooksRouter.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/users", userRouter)
app.use("/api/books", booksRouter)
app.use("/", authRouter)


mongoose
    .connect(process.env.DB_SECRET_KEY)
    .then(() => console.log("Connected!"))
    .catch(() => console.log("Not Connected!"));

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
