/** @format */

import { Router } from "express";
import addOnModel from "../models/addOn.mjs";

const addOnRouter = Router();

addOnRouter.get("/", async (req, res) => {
   try {
      const addOns = await addOnModel.find();
      res.status(200).json(addOns);
   } catch (error) {
      res.status(500).json({ message: "Unable fo find addons" });
   }
});

addOnRouter.post("/", async (req, res) => {
   const { name, price } = req.body;

   try {
      const newAddOn = await addOnModel.create({
         name,
         price,
      });
      const savedAddOn = await newAddOn.save();
      res.status(201).json(savedAddOn);
   } catch (error) {
      res.status(500).send("Unable to save addon");
   }
});

export default addOnRouter;
