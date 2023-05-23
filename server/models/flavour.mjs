/** @format */

import mongoose from "mongoose";
import { Schema } from "mongoose";

const flavourShema = new Schema({
   name: {
      type: String,
      requered: true,
   },
});

const flavourModel = mongoose.model("Flavour", flavourShema);
export default flavourModel;
