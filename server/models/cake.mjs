/** @format */

import mongoose from "mongoose";
import { Schema } from "mongoose";

export const cakeShema = new Schema({
   name: {
      type: String,
      requered: true,
   },
   flavours: {
      type: Array,
      requered: true,
   },
   price: {
      type: Number,
      requered: true,
   },
   availableAddons: {
      type: Array,
      requered: true,
   },
   cakeImage: {
      type: String,
      requered: true,
   },
});

const cakeModel = mongoose.model("Cake", cakeShema);
export default cakeModel;
