/** @format */

import { Router } from "express";
import cakeModel from "../models/cake.mjs";

const cakeRouter = Router();

cakeRouter.get("/", async (req, res) => {
   try {
      const cakes = await cakeModel.find();
      res.status(200).json(cakes);
   } catch (error) {
      res.status(500).json({ message: "Unable fo find cakes" });
   }
});

cakeRouter.post("/", async (req, res) => {
   const { name, flavours, price, availableAddons } = req.body;

   try {
      const newCake = await cakeModel.create({
         name,
         flavours,
         price,
         availableAddons
      });
      const savedCake = await newCake.save();
      res.status(201).json(savedCake);
   } catch (error) {
      res.status(500).send("Unable to save cake");
   }
});

export default cakeRouter;
