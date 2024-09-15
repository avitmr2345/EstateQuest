import express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import listingRoute from "./routes/listing.js";
import cookieParser from "cookie-parser";
import path from "path";
const app = express();
const __dirname = path.resolve();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB connected.");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/listing", listingRoute);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  //middleware for handling error
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
