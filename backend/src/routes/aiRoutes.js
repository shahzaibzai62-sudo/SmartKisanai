import express from 'express';
import { askFarmingAI } from '../controllers/aiController.js';

const router = express.Router();

// POST request for AI Assistant
router.post('/ask', askFarmingAI);

export default router;
