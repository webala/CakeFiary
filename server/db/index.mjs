/** @format */

import mongoose from "mongoose";

const connectDB = async () => {
   try {
      const connect = await mongoose.connect(process.env.DATABASE_URI);
      console.log("Successfully connected to mongoDB");
   } catch (error) {
      console.log(error);
      console.log("Unable to connecte to mongoDB");
   }
};

export default connectDB;
