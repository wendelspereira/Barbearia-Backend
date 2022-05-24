"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scheduling = void 0;
const uuid_1 = require("uuid");
const typeorm_1 = require("typeorm");
let Scheduling = class Scheduling {
    id;
    client; //refactory
    services; //refactory
    // services!: IServiceDTO[];
    schedulingHours;
    created_at;
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Scheduling.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Scheduling.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Scheduling.prototype, "services", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Scheduling.prototype, "schedulingHours", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Scheduling.prototype, "created_at", void 0);
Scheduling = __decorate([
    (0, typeorm_1.Entity)("schedulings"),
    __metadata("design:paramtypes", [])
], Scheduling);
exports.Scheduling = Scheduling;
