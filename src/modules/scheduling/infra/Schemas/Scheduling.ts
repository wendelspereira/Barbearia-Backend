import mongoose from "mongoose";
import { ClientSchema} from '../../../clients/infra/schemas/ClientModel';
import { FeatureSchema } from "../../../features/infra/Schemas/Feature";

const SchedulingSchema = new mongoose.Schema({
    client: { 
        type: ClientSchema,
        required: true,
    },

    services: {
        type: [FeatureSchema],
        required: true,
    },

    schedulingHours: {
        type: String,
        required: true,
    }

});

const SchedulingModel = mongoose.model("Scheduling", SchedulingSchema)

export { SchedulingModel}
