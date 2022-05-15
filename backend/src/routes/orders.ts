import { Orders } from "../models/Orders";


export function OrdersRoute(app) {
    app.get("/orders", async (req, res) => {
        if (req.query.name) {
            const orders = await Orders.findOne({ name: req.query.name });
            res.json(orders);
        } else {
            const orders = await Orders.find();
            res.json(orders);
        }
    });
    app.get("/orders/:id", async (req, res) => {
        try {
            const id = req.params.id;
            const orders = await Orders.find({ _id: id });
            res.json(orders);
        } catch (error) {
            console.log(error);
        }
    });
    app.get("/orders/customer/:id", async (req, res) => {
        try {
            const id = req.params.id;
            const orders = await Orders.find({ customer: id });
            res.json(orders);
        } catch (error) {
            console.log(error);
        }
    });
    app.post("/orders", async (req, res) => {
        try {
            const body = req.body;
            const newOrders = await new Orders(body).save();
            res.json(newOrders);
        } catch (error) {
            res.json({ error: "Vous n'avez pas précisé tous les paramètres" });
        }
    });
    app.delete("/orders/:id", async (req, res) => {
        try {
            const id = req.params.id;
            const orders = await Orders.findByIdAndDelete(id);
            res.json(orders);
        } catch (error) {
            console.log(error);
        }
    });
}