import express from 'express';
import connectDB from './db/index.mjs';
import dotenv from 'dotenv'


dotenv.config()
const app = express()

connectDB()

app.get('/', (req, res) => {
   res.send("Hello world")
})

const port = 8000

app.listen(port, () => {
   console.log(`Server ready at ${port}`)
})