import mongoose from "mongoose";
import { Schema } from "mongoose";
import moment from 'moment'
import { orderSchema } from "./order.mjs";

const transactionSchema = new Schema({
    requestId: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: moment().format("MM Do YYYY")
    },
    amount: {
        type: Number,
        required: false
    },
    order: {
        type: orderSchema,
    }
})

const transactionModel = mongoose.model("Transaction", transactionSchema)
export default transactionModel