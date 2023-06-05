import { Router } from "express";
import initiateStkPush from "../daraja/index.mjs";
import transactionModel from "../models/transaction.mjs";


const transactionRoute = Router()

transactionRoute.post("/", async (req, res) => {
    const { order, phone } = req.body

    const response = await initiateStkPush(phone)
    try {
        const newTransaction = await transactionModel.create(
            {
                requestId: response.CheckoutRequestID,
                order
            }
        )
        const savedTransaction = await newTransaction.save()
        res.status(201).json(savedTransaction)
    } catch (error) {
        console.log('error: ', error)
        res.status(500).send("Unable to create transaction");
    }
})

transactionRoute.get("/:requestId", async (req, res) => {
    const { requestId } = req.params
    try {
        const transaction = await transactionModel.find({requestId})
        res.status(200).json(transaction)
    } catch (error) {
        res.status(500).send('Unable to find transaction record')
    }
})

export default transactionRoute;