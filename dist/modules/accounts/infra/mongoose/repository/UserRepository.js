"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const AppError_1 = require("../../../../../shared/errors/AppError");
const User_1 = require("../schemas/User");
const bcrypt_1 = require("bcrypt");
class UserRepository {
    async create(data) {
        const user = new User_1.UserModel({ ...data });
        const result = await user.save();
        return result;
    }
    async findById(id) {
        const user = User_1.UserModel.findById({ _id: id });
        if (!user) {
            throw new AppError_1.AppError("User not found!");
        }
        return user;
    }
    async findByEmail(email) {
        const user = User_1.UserModel.findOne({ email: email });
        if (!user) {
            throw new AppError_1.AppError("User not found!");
        }
        return user;
    }
    async checkPassword(email, password) {
        const user = await User_1.UserModel.findOne({ email: email }).select([
            "name",
            "password",
        ]);
        if (!user) {
            throw new AppError_1.AppError("User doesn`t exists!");
        }
        const passwordMatch = await (0, bcrypt_1.compare)(password, user.password);
        user.password = undefined;
        if (!passwordMatch) {
            throw new AppError_1.AppError("Email or password is incorrect!", 401);
        }
        return user;
    }
}
exports.UserRepository = UserRepository;
