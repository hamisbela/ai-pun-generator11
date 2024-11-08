import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generatePrompt = (description: string, style: string): string => {
  return `Generate 5 unique and creative group names for: "${description}"
Style: ${style}

Requirements:
- Names should be memorable and unique
- Avoid generic terms
- Consider the group's purpose and values
- Match the selected style (${style})
- Each name should be distinct and creative

Return only the 5 names, one per line, without numbers or additional text.`;
};

export const generateNames = async (
  description: string,
  style: string
): Promise<string[]> => {
  if (!import.meta.env.VITE_GEMINI_API_KEY) {
    // Fallback names if API key is not set
    return [
      "Quantum Collective",
      "Stellar Squad",
      "Echo Alliance",
      "Nexus Tribe",
      "Prism Pioneers"
    ];
  }

  try {
    const result = await model.generateContent(generatePrompt(description, style));
    const content = result.response.text();
    
    // Split the content into lines and filter out empty lines
    return content.split('\n').filter(name => name.trim().length > 0).slice(0, 5);
  } catch (error) {
    console.error('Error generating names:', error);
    throw new Error('Failed to generate names. Please try again.');
  }
};