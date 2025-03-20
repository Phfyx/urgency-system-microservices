import express from 'express';
import connectDB from './config/database.js';
import indexRouter from './routers/indexRouter.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api", indexRouter);

// Connect to database
connectDB();

app.listen(PORT, () => {
  console.log(`Service running on port ${PORT}`);
});
