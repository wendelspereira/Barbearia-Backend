"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const clientSchema = new Schema({
    name: String,
    idade: Number,
    phoneNumber: String,
    created_at: { type: Date, default: Date.now },
});
const Client = model("User", clientSchema);
exports.Client = Client;
