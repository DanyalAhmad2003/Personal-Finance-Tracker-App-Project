

import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.use(cors());

const mongoURI: string =
  "mongodb+srv://danyalahmed20003:epOirxoN9McGj1WL@personalfinancetracker.o7cjhbg.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log("CONNECTED TO MONGODB!"))
  .catch((err) => console.error("Failed to Connect to MongoDB:", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});