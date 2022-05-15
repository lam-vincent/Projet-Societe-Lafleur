import { Flowers } from "../models/Flowers";

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
            const flowers = await Flowers.findOneAndUpdate({ _id: id }, body, { new: true });
            res.json(flowers);
        } catch (error) {
            console.log(error);
        }
    });
}