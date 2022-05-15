import mongoose from "mongoose";
const { Schema } = mongoose;

const ordersSchema = new Schema({
    customer : { type: Schema.Types.ObjectId, ref: 'Customers' },
    flower : { type: Schema.Types.ObjectId, ref: 'Flowers' },
    amount : {
      type: Number,
      required: true,
    },
  });
  
  export const Orders = mongoose.model("Orders", ordersSchema);