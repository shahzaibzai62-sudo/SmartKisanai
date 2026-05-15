import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import aiRoutes from './src/routes/aiRoutes.js';

// Load environment variables (like API Keys)
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/ai', aiRoutes);

// Health Check Route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Smart Kisan AI Backend is running!' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
