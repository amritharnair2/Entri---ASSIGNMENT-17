const user = require("../model/userModel");
const { generateToken } = require("../utilities/generateToken");
const bcrypt = require('bcrypt')

const register = async (req,res) => {
    try {
        const {name, email, password} = req.body;
        if(!name || !email || !password)
        {
            return res.status(400).json({error: "All fields are required"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new user({name, email, password: hashedPassword})
        const savedUser = await newUser.save()
        const id = savedUser._id
        const token = generateToken(id)

        res.cookie("token", token)
        res.status(201).json({message: "User created", savedUser})

    } catch (error) {
        res.status(error.status || 500).json({error: error.message || "Internal server error"})
    }
}

const userLogin = async(req,res,next) => {
    try {
        const {email, password} = req.body
        if(!email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const userExist = await user.findOne({email}) 
        if(!userExist) {
            return res.status(400).json({ error: "user not found" });
        }

        const passwordMatch = await bcrypt.compare(password, userExist.password)
        if(!passwordMatch) {
            return res.status(400).json({ error: "Password doesnot match" });
        }

        const id = userExist._id
        const token = generateToken(id)

        res.cookie("token", token)

        return res.status(200).json({message: "user login successfull", userExist})
    } catch (error) {
        console.log(error)
        res.status(error.status || 500).json({error: error.message || "Internal server error"})

    }
}

module.exports = {
    register,
    userLogin
}