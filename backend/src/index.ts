import express from "express";
import { json } from "body-parser";
import { flowerTypesRoute } from "./routes/flowerTypes";
import { flowersRoute } from "./routes/flowers";
import { OrdersRoute } from "./routes/orders";
import { ProfilRoute } from "./routes/profil";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/mydb");

flowerTypesRoute(app);
flowersRoute(app);
OrdersRoute(app);
ProfilRoute(app);

app.listen(4000, () => console.log("server started on port 4000"));

// list / GET
// details /:id GET
// create / POST
// update /:id PATCH
// delete /:id DELETE
