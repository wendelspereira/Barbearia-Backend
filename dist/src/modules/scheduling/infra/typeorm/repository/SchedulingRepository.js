"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulingRepository = void 0;
class SchedulingRepository {
    schedulings;
    async create({ client, services, schedulingHours }) {
        const scheduling = {
            client,
            services,
            schedulingHours,
        };
        await this.schedulings.push(scheduling);
    }
    async list() {
        return this.schedulings;
    }
}
exports.SchedulingRepository = SchedulingRepository;
