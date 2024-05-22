import { UserEkithubModel } from "../Model/UserModel.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await UserEkithubModel.find({});
        res.json(users)
    } catch (error) {
        res.send(error.message)
    }
}

export const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await UserEkithubModel.findById(id);
        res.json(user)
    } catch (error) {
        res.send(error.message);
    }
}

export const createUsers = async (req, res) => {
    try {
        const { username, email, password, role } = req.body
        const newUser = new UserEkithubModel({ username, email, password, role })
        await newUser.save()
        res.status(200).json('User elave olundu!')
    } catch (error) {
        res.send(error.message)
    }
}

export const updateUsers = async (req, res) => {
    try {
        const { id } = req.params
        const { username, email, password, role } = req.body
        const user = await UserEkithubModel.findByIdAndUpdate(id, { username, email, password, role });
        res.json(user)
    } catch (error) {
        res.send(error.message);
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await UserEkithubModel.findByIdAndDelete(id);
        res.json(user)
    } catch (error) {
        res.send(error.message);
    }
}