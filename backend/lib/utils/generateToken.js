import jwt from "jsonwebtoken"

export const generateTokenAndSetCookie = (userid, res) => {
    const token = jwt.sign({userid}, process.env.JWT_SECRET, {
        expiresIn: '15d',
    })
    res.cookie("jwt", token, {
        maxAge: 15*24*60*60*1000, //MilliSeconds
        httpOnly: true,     // prevent XSS attacks cross-site scripting attacks 
        sameSite: "strick",  // prevent attacks cross-site request forgery attacks 
        secure: process.env.NODE_ENV !== "development",
        
    })
}