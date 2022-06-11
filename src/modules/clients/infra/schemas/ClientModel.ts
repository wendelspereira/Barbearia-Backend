import { mongoose } from "../../../../database";
const { Schema } = mongoose;

const ClientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  lastName: { type: String },

  birthDate: { type: Date },

  phoneNumber: {
    type: String,
    required: true,
  },

  address: {
    street: { type: String },
    number: { type: Number },
    district: { type: String },
    city: { type: String },
    uf: { type: String },
  },

  avatar: { type: String },

  created_at: {
    type: Date,
    default: Date.now,
  },
});

const ClientModel = mongoose.model("Client", ClientSchema);

export { ClientModel, ClientSchema };
