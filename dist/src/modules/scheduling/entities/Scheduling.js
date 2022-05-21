"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scheduling = void 0;
const uuid_1 = require("uuid");
class Scheduling {
    id;
    client;
    services;
    schedulingHours;
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
        this.client.isWhatsapp = true;
    }
}
exports.Scheduling = Scheduling;
