import { Profil } from "../models/Profil";

export function profilRoute(app) {
    app.get("/profil", async (req, res) => {
        if (req.query.name) {
            const profil = await Profil.findOne({ name: req.query.name });
            res.json(profil);
        } else {
            const profil = await Profil.find();
            res.json(profil);
        }
    });

    app.get("/profil/:id", async (req, res) => {
        try {
            const id = req.params.id;
            const profil = await Profil.find({ _id: id });
            res.json(profil);
        } catch (error) {
            console.log(error);
        }
    });

    app.post("/profil", async (req, res) => {
        try {
            const body = req.body;
            const newProfil = await new Profil(body).save();
            res.json(newProfil);
        } catch (error) {
            res.json({ error: "Vous n'avez pas précisé tous les paramètres" });
        }
    });
}
