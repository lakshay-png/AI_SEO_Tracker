import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import rankRouter from "./routes/rankRoutes.js";
import analysisRouter from "./routes/analysisRoutes.js";
import { startRankTrackingCron } from "./cron/rankTrackingCron.js";

connectDB();

const app = express();


// it will apply on all API requests
app.use(cors());
app.use(express.json());

//create a home route to check whether server is running or not
app.get("/", (req, res) => res.send("Server is running"));

app.use("/api/auth", authRouter);
app.use("/api/rank", rankRouter);
app.use("/api/analysis", analysisRouter);

// Start cron jobs
startRankTrackingCron();

// provide a port to "/" route
const PORT = process.env.PORT || 5000;

// I am using here template literal
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
