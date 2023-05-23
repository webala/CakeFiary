import express from 'express';
import connectDB from './db/index.mjs';
import dotenv from 'dotenv'
import morgan from 'morgan'
import flavourRouter from './routes/flavour.mjs';
import addOnRouter from './routes/addOn.mjs';
import cakeRouter from './routes/cake.mjs';
import cors from 'cors'


dotenv.config()
const app = express()

connectDB()


//Default middlewares
app.use(cors());
app.use(morgan('dev')) //Responsible for logging http requests
app.use(express.json()) //Responsible for parsing requests with json payloads
app.use(express.urlencoded()) // parses incoming requests with URL-encoded payloads



//Routes
app.use('/flavour', flavourRouter)
app.use("/addon", addOnRouter);
app.use("/cake", cakeRouter)

const port = 8000

app.listen(port, () => {
   console.log(`Server ready at ${port}`)
})