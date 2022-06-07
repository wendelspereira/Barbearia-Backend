import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const clientSchema = new Schema({
  id: ObjectId,
  name: String,
  idade: Number,
  phoneNumber: String,
  created_at: { type: Date, default: Date.now },
});

const Client = model("User", clientSchema);

export { Client };
