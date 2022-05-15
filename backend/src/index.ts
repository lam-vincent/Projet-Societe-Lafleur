import express from "express";
import { json } from "body-parser";
import { customersRoute } from "./routes/customers";
import { flowerTypesRoute } from "./routes/flowerTypes";
import { flowersRoute } from "./routes/flowers";
import { OrdersRoute } from "./routes/orders";
import mongoose from "mongoose";

const app = express();
app.use(json());

mongoose.connect("mongodb://localhost:27017/mydb");

flowerTypesRoute(app);
customersRoute(app);
flowersRoute(app);
OrdersRoute(app);

app.listen(4000, () => console.log("server started on port 4000"));

// list / GET
// details /:id GET
// create / POST
// update /:id PATCH
// delete /:id DELETE