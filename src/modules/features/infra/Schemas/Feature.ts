import mongoose from "mongoose";

const FeatureSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  price: {
    type: Number,
    required: true,
    min: 1,
  },

  estimatedTime: {
    type: Number,
    required: true,
  },

  isAvailable: {
    type: Boolean,
    default: true
  }
});

const FeatureModel = mongoose.model("Feature", FeatureSchema)

export { FeatureModel, FeatureSchema}
