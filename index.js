import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
const port = process.env.PORT || 4000;
import authRoutes from "./Routers/routers.js";
import db from "./Config/mongoose.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/user", authRoutes);

app.get("/", (req, res) => {
  res.send("Server running correctly");
});

app.listen(port, (err) => {
  if (err) {
    console.log("Error in running server");
  } else {
    console.log("Server running successfully on port no", port);
  };
});
