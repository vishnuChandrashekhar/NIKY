import express from "express";
import config from "config";
import { connectDB } from "./Utils/connectDB";
import mongoose from "mongoose";

const app: express.Application = express();
const PORT = config.get<number>("port");

// Middlewares
app.use(express.json());

// // Connect to Database
connectDB();

app.get("/", (_req: express.Request, res: express.Response) => {
  res.send("The NIKY backend");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
