import express from 'express';
import connectDB from './db/index.mjs';
import dotenv from 'dotenv'
import morgan from 'morgan'


dotenv.config()
const app = express()

connectDB()


//Default middlewares
app.use(morgan('dev')) //Responsible for logging http requests
app.use(express.json()) //Responsible for parsing requests with json payloads
app.use(express.urlencoded()) // parses incoming requests with URL-encoded payloads


//Test endpoing
app.get('/', (req, res) => {
   res.send("Hello world")
})

const port = 8000

app.listen(port, () => {
   console.log(`Server ready at ${port}`)
})