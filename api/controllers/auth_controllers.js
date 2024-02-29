import User from "../models/user_model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res, next) =>{

const { username, email, password } = req.body;
const hashedPassword = bcryptjs.hashSync(password, 10);

const newUser = new User({ username, email, password: hashedPassword });
try {
    await newUser.save()
    res.status(201).json("User data is entered successfully")
} catch (error) {
    //res.status(500).json(error.message);
    next(error);
}

};