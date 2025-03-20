import express from "express";
import { connectDB } from "./config/database.js";
import dotenv from "dotenv";
import callerRouter from "./routes/callerRoutes.js";
import operatorRouter from "./routes/operatorRoutes.js";



dotenv.config();
const { PORT } = process.env

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use("/api", callerRouter);
app.use("/api", operatorRouter);


app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))
