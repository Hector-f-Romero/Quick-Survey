import express from "express";
import "dotenv/config";

import { connectDB } from "./db/mongo.config.js";
import pollRoutes from "./routes/poll.routes.js";

const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(express.json());

app.use("/api/v1/poll", pollRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT} 🔥`));
