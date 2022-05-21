"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesRepository = void 0;
const typeorm_1 = require("typeorm");
const Feature_1 = require("../entities/Feature");
class FeaturesRepository {
    find() {
        throw new Error("Method not implemented.");
    }
    repository;
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(Feature_1.Feature);
    }
    async create(data) {
        const feature = this.repository.create({ ...data });
        await this.repository.save(feature);
    }
    async list() {
        const features = await this.repository.find();
        return features;
    }
    async findByName(name) {
        const feature = await this.repository.findOne({ name });
        return feature;
    }
    async findById(id) {
        const feature = await this.repository.findOne(id);
        return feature;
    }
}
exports.FeaturesRepository = FeaturesRepository;
