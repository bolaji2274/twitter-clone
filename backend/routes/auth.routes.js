import express from 'express'
import { login, logout, signup } from '../controllers/auth.controller.js';


const router = express.Router();

router.get("/signup", (req, res) => signup)

router.get("/login", (req, res) => login)

router.get("/logout", (req, res) => logout)

router.get("/register", (req, res) => {
    res.send("This is register ")
})

export default router;