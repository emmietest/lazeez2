import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "Flavor Guide" for Lazeez Eats, a restaurant specializing in authentic Mediterranean and Middle Eastern cuisine.
Your goal is to help customers choose what to eat based on their preferences.
Our menu highlights include:
- Falafel Bowls (Vegetarian, Crispy)
- Chicken Shawarma (Savory, Spiced)
- Hummus (Creamy, smooth)
- Fresh baked Pita
- Pickled Turnips (Pink, tangy)
- Garlic Sauce (ToumV)

Tone: Enthusiastic, appetizing, and concise. Use emojis occasionally.
If a user asks about prices, give estimates around $12-$15 for bowls.
Strictly keep responses under 50 words.
`;

export const sendMessageToGemini = async (
  history: { role: string; parts: { text: string }[] }[],
  message: string
): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key not found");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Using chat for conversation history
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const response: GenerateContentResponse = await chat.sendMessage({
      message: message
    });

    return response.text || "I'm busy chopping parsley! Ask me again in a moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Oops! Our flavor guide is taking a quick break. Please try again.";
  }
};