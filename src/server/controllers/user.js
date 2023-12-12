import User from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const secret = process.env.JWT_SECRET

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const registerUser = async (req, res) => {
    const {password} = req.body
    bcrypt.hash(password, 12, async function (err, hash){
        const user = new User ({
            username: req.body.username,
            email: req.body.email,
            password: hash
            })
            try {
                const newUser = await user.save()
                res.status(201).json(newUser)
            } catch (error) {
                res.status(400).json({Error: error.message})
            }
    })
}

const loginUser = async (req, res) => {
    const {username, password} = req.body
    const foundUser = await User.findOne({username})
    if(foundUser){
        bcrypt.compare(password, foundUser.password, function(err, result){
            if(result){
                const token = jwt.sign({username}, secret)
                res.status(201).json({token})
            } else return res.status(401).json('Invalid username or password')
        })
    } else return res.status(401).json('Invalid username or password')
}

export {
    getAllUsers,
    registerUser,
    loginUser
}