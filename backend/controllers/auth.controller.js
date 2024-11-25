import { generateTokenAndSetCookie } from "../lib/utils/generateToken.js";
import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'

export const signup = async (req, res) => {
    try {
        const {fullName, username, email, password} = req.body
        
        const emailRegex = /^[^\s@]+@^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({error: "Invalid email format" });
        }

        const existingUser = await User.findOne({ username })
        if(existingUser){
            return res.status(400).json({error: "Username is already exist"})
        }

        const existingEmail = await User.findOne({ email })
        if(existingEmail){
            return res.status(400).json({error: "Email is already exist"})
        }

        // hashing password 

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName,
            username,
            email ,
            password: hashedPassword,
        })

        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                email: newUser.email,
                followers: newUser.followers,
                following: newUser.following,
                profileImg: newUser.profileImg,
                coverImg: newUser.coverImg,
            })
        } else {
            return res.status(400).json({error: "Invalid User Data"})
        }

    } catch (error) {
        return res.status(500).json({error: "Internal server Error "})
    }
}

export const login = async (req, res) => {
    res.json({
        data: "This is login data",
    })
}

export const logout = async (req, res) => {
    res.json({
        data: "This is logout data",
    })
}