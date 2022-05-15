import { Customers } from "../models/Customers";

export function customersRoute(app) {
    app.get("/customers", async (req, res) => {
        if(req.query.name) {
            const customers = await Customers.findOne({name: req.query.name});
            res.json(customers);
        } else {
            const customers = await Customers.find();
            res.json(customers);
        }
    });
    
    app.get("/customers/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const customers = await Customers.find({ _id: id });
        res.json(customers);
      } catch (error) {
        console.log(error);
      }
    });
    
    app.post("/customers", async (req, res) => {
        try {
            const body = req.body;
            const newCustomers = await new Customers(body).save();
            res.json(newCustomers);
        } catch (error) {
            res.json({ error: "Vous n'avez pas précisé tous les paramètres" });
        }
    });
}
