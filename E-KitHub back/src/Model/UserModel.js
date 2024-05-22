import mongoose, { Schema } from "mongoose";

const userEkithubSchema = new Schema({
    username: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, default: "user" },
});
export const UserEkithubModel = mongoose.model("UserEkithubModel", userEkithubSchema);