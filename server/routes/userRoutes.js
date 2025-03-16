const { register, userLogin } = require('../controllers/userControllers')

const userRouter = require('express').Router()

userRouter.post("/register", register)
userRouter.post("/login", userLogin)

module.exports = userRouter