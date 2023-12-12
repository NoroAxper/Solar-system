import {getAllUsers, registerUser, loginUser} from '../controllers/user.js'
import express from 'express'
const router = express.Router()

router.get('/', getAllUsers)

// Getting One 
router.get('/:id', (req, res) => {})

router.post('/registration', registerUser)

router.post('/login', loginUser)

// Updating One
router.get('/:id', (req, res) => {})

// Deleting One

export default router