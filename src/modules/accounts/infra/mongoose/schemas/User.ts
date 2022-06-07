import mongoose from "mongoose";
import { ObjectId } from 'mongodb';
const { Schema } = mongoose;

const userSchema = new Schema({
  id: ObjectId,
  personalData: {
    name: String,
  },
  accountData: {
    email: String,
    password: String,
    isAdmin: Boolean,
    created_at: { type: Date, default: Date.now },
  },
});

const UserModel = mongoose.model("User", userSchema);

export { UserModel };
