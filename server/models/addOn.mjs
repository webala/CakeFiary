/** @format */

import mongoose from "mongoose";
import { Schema } from "mongoose";

const addOnShema = new Schema({
   name: {
      type: String,
      requered: true,
   },
   price: {
      type: Number,
      requred: true,
   },
});

const addOnModel = mongoose.model("AddOn", addOnShema);
export default addOnModel;
