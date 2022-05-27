import mongoose from "mongoose";
const { Schema } = mongoose;

export const profilSchema = new Schema({
  flowerType : { type: Schema.Types.ObjectId, ref: 'Profil' },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  birth: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

export const Profil = mongoose.model("Profil", profilSchema);