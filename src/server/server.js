import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import usersRouter from './routers/user.js'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})
const db = mongoose.connection

const app = express()
app.use(cors())
app.listen(4000, () => console.log('Server 4000 started'))
app.use(express.json())

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use('/users', usersRouter)