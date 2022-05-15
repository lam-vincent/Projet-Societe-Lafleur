import mongoose from "mongoose";
const { Schema } = mongoose;

export const flowersSchema = new Schema({
  flowerType : { type: Schema.Types.ObjectId, ref: 'FlowerType' },
  name: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  stock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export const Flowers = mongoose.model("Flowers", flowersSchema);