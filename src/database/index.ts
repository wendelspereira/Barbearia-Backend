import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
const uri = process.env.DATABASE_URI || ""
mongoose.connect(uri);

mongoose.Promise = global.Promise

export {mongoose}