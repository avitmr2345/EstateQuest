import express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB connected.");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
