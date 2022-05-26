import { Flowers } from "../models/Flowers";
import { FlowerType } from "../models/FlowerType";
import { FlowerTypes } from "../models/FlowerTypes";

export function flowersRoute(app) {
  app.get("/flowers", async (req, res) => {
    if (req.query.name) {
      const flowers = await Flowers.findOne({ name: req.query.name });
      res.json(flowers);
    } else {
      const flowers = await Flowers.find();
      res.json(flowers);
    }
  });
  app.get("/flowers/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const flowers = await Flowers.find({ _id: id });
      res.json(flowers);
    } catch (error) {
      console.log(error);
    }
  });
  app.post("/flowers", async (req, res) => {
    try {
      const body = req.body;
      const newFlowers = await new Flowers(body).save();
      res.json(newFlowers);
    } catch (error) {
      res.json({ error: "Vous n'avez pas précisé tous les paramètres" });
    }
  });
  app.patch("/flowers/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const body = req.body;
      const flowers = await Flowers.findOneAndUpdate({ _id: id }, body, {
        new: true,
      });
      res.json(flowers);
    } catch (error) {
      console.log(error);
    }
  });
  app.get("/flowersbytype", async (req, res) => {
    const flowerTypeName = req.query.flowertype;
    if (!flowerTypeName)
      return res.json({ error: "Précisez le type de fleur: ?flowerype=" });
    const flowerType = await FlowerTypes.findOne({ name: flowerTypeName });
    if (!flowerType)
      return res.json({ error: "ce type de fleur n'existe pas" });
    const flowers = await Flowers.find({ flowerType: flowerType.id });
    return res.json(flowers);
  });
  app.delete("/flowers/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const flowers = await Flowers.findByIdAndDelete(id);
      res.json(flowers);
    } catch (error) {
      console.log(error);
    }
  });
}
