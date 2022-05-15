import { FlowerTypes } from "../models/FlowerTypes";

export function flowerTypesRoute(app) {
    app.get("/flowertypes", async (req, res) => {
        if(req.query.name) {
            const flowerTypes = await FlowerTypes.findOne({name: req.query.name});
            res.json(flowerTypes);
        } else {
            const flowerTypes = await FlowerTypes.find();
            res.json(flowerTypes);
        }
    });
    
    app.get("/flowertypes/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const flowerTypes = await FlowerTypes.find({ _id: id });
        res.json(flowerTypes);
      } catch (error) {
        console.log(error);
      }
    });
    
    app.post("/flowertypes", async (req, res) => {
      try {
        const body = req.body;
        const newFlowerTypes = await new FlowerTypes(body).save();
        res.json(newFlowerTypes);
      } catch (error) {
        res.json({ error: "Vous n'avez pas précisé tous les paramètres" });
      }
    });
}
