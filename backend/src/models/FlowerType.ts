import mongoose from "mongoose";
const { Schema } = mongoose;

const flowerTypesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export const FlowerType = mongoose.model("FlowerType", flowerTypesSchema);
