import mongoose from "mongoose";
require("dotenv").config();

const uri = process.env.DATABASE_URI || ""
mongoose.connect(uri);

mongoose.Promise = global.Promise

export {mongoose}