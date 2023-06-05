import { Router } from "express";
import orderModel from "../models/order.mjs";


const orderRouter = Router()

orderRouter.get('/', async (req, res) => {
    try {
        const orders = await orderModel.find();
        res.status(200).json(orders)
    } catch(error) {
        res.status(500).json({ message: "Unable fo find orders" });
    }
})

orderRouter.post("/", async (req, res) => {
    const {orderItems, client} = req.body

    try {
        const newOrder = await orderModel.create({
            orderItems,
            client
        })
        const savedOrder = await newOrder.save()
        res.status(201).json(savedOrder)
    } catch(error) {
        console.log('error: ', error)
        res.status(500).send("Unable to save order");
    }
})

orderRouter.get("/:id", async (req, res) => {
    const {id} = req.params;

    try {
        const order = await orderModel.findById({_id: id})
        res.status(200).json(order)
    } catch(error) {
        res.status(500).send("Unable to find order");
    }
})

export default orderRouter