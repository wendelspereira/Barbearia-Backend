import mongoose from "mongoose";

const uri = process.env.DATABASE_URI!
mongoose.connect(uri);

mongoose.Promise = global.Promise

export {mongoose}