import { GoogleGenerativeAI } from '@google/generative-ai';

export const askFarmingAI = async (req, res) => {
  try {
    const { message, language = 'ur' } = req.body;
    
    // Ensure API Key exists
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ success: false, error: 'API Key missing' });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // System prompt setup
    const systemPrompt = `
      You are Smart Kisan AI, an expert agricultural assistant for Pakistani farmers. 
      Keep answers short, simple, practical, and farmer-friendly. 
      Respond in ${language} (Urdu, English, or Roman Urdu).
      Focus on low-cost farming, disease prevention, and high yield.
    `;

    const result = await model.generateContent(`${systemPrompt}\nUser: ${message}`);
    const response = await result.response;
    
    res.json({ 
      success: true, 
      reply: response.text() 
    });

  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ success: false, message: "AI Assistant is currently unavailable." });
  }
};
