import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
dotenv.config();

const app = express();
const PROT = process.env.PORT || 8080;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.use("/api/auth", authRoutes);
app.listen(PROT, () => {
  connectDB();
  console.log("server listening on port ", PROT);
});

//kw3cn04lAAhk6lr7

// Phuc2001?
//
