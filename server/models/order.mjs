import mongoose from "mongoose";
import { Schema } from "mongoose";
import moment from 'moment'
import { cakeShema } from "./cake.mjs";
import { addOnShema } from "./addOn.mjs";

const orderItemSchema = new Schema({
    id: String,
    cake: cakeShema,
    addOns: [addOnShema]
})

const clientSchema = new Schema({
    name: String,
    email: String,
    phone: String,
})
export const orderSchema = new Schema({
    date: {
        type: String,
        default: moment().format("MM Do YYYY")
    },
    orderItems: [orderItemSchema],
    client: {
        type: clientSchema,
        required: true,
    },
    booked: {
        type: Boolean,
        default: false
    },
    complete: {
        type: Boolean,
        default: false
    },
    delivery: {
        type: Boolean,
        default: false
    }
})

const orderModel = mongoose.model("Order", orderSchema)
export default orderModel;