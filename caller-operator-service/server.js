import express from 'express';
import connectDB from './config/database.js';
import callerRouter from './routes/callerRoutes.js';
import operatorRouter from './routes/operatorRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api", callerRouter);
app.use("/api", operatorRouter);

// Connect to database
connectDB();

app.listen(PORT, () => {
  console.log(`Service running on port ${PORT}`);
});



