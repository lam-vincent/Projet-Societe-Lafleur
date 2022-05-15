import mongoose from "mongoose";
const { Schema } = mongoose;

export const flowerTypesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export const FlowerTypes = mongoose.model("FlowerTypes", flowerTypesSchema);
