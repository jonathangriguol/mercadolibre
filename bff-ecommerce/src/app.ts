import express, { Application } from "express";
import cors from "cors";
import healthRouter from "./routes/health.route";
import itemsRouter from "./routes/items.route";

const app: Application = express();

/**
 * Accept from all, just for technical test
 * TODO: Add an array of valid origins in a constants file
 */
const corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", itemsRouter);

app.use("/api", healthRouter);

export default app;
