"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const User_entity_1 = require("../entities/User.entity");
class UserRepository {
    repository;
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(User_entity_1.User);
    }
    async create({ name, email, password }) {
        console.log(this.repository);
        const user = this.repository.create({ name, email, password });
        await this.repository.save(user);
    }
    async findByEmail(email) {
        const user = await this.repository.findOne({ email });
        return user;
    }
    async findById(id) {
        const user = await this.repository.findOne(id);
        return user;
    }
}
exports.UserRepository = UserRepository;
