import mongoose from "mongoose";
const { Schema } = mongoose;

export const customersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export const Customers = mongoose.model("Customers", customersSchema);
