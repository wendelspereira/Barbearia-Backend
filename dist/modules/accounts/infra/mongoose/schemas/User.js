"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const index_1 = require("../../../../../database/index");
const bcrypt_1 = __importDefault(require("bcrypt"));
const { Schema } = index_1.mongoose;
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});
UserSchema.pre("save", async function (next) {
    const hash = await bcrypt_1.default.hash(this.password, 10);
    this.password = hash;
    next();
});
const UserModel = index_1.mongoose.model("User", UserSchema);
exports.UserModel = UserModel;
