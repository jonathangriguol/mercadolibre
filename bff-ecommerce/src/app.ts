import express, { Application } from 'express';
import healthRouter from './routes/health.route.ts';
import itemsRouter from './routes/items.route.ts';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api", itemsRouter)

app.use('/api', healthRouter);

export default app;
