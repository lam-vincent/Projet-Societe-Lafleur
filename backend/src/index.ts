import express from "express";
import { json } from "body-parser";
import { FlowerType } from "./models/FlowerType";
import mongoose from "mongoose";

const app = express();
app.use(json());

mongoose.connect("mongodb://localhost:27017/mydb");

app.get("/flowertypes", async (req, res) => {
  const flowerTypes = await FlowerType.find();
  res.json(flowerTypes);
});

app.get("/flowertypes/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const flowerTypes = await FlowerType.find({ _id: id });
    res.json(flowerTypes);
  } catch (error) {
    console.log(error);
  }
});

app.post("/flowertypes", async (req, res) => {
  try {
    const body = req.body;
    const newFlowerType = await new FlowerType(body).save();
    res.json(newFlowerType);
  } catch (error) {
    res.json({ error: "Vous n'avez pas précisé tous les paramètres" });
  }
});

app.delete("/flowertypes/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await FlowerType.deleteOne({ _id: id });
    res.json({ deleted: id });
  } catch (error) {
    console.log(error);
  }
});

app.listen(4000, () => console.log("server started on port 4000"));

// list / GET
// details /:id GET
// create / POST
// update /:id PATCH
// delete /:id DELETE
