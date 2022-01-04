const User = require("../models/User")
const router = require("express").Router()
const CryptoJS = require("crypto-js")


//Register
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECREKEY).toString(),
    });

    try{
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch(err){
        res.status(500).json(err)
    }
})

//Login
router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username});
        !user && res.status(401).json("Wrong credentials")

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECREKEY);
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        const {password, ...others} = user._doc

        originalPassword !== req.body.password && es.status(401).json("Wrong credentials")

        res.status(200).json(others)
    } catch(err){
        res.status(500).json(err)
    }
})

module.exports = router