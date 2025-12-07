import { GoogleGenAI } from "@google/genai";
import { WishRequest } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateChristmasWish = async (request: WishRequest): Promise<string> => {
  try {
    const prompt = `
      Hãy viết một lời chúc Giáng sinh (Noel) bằng tiếng Việt thật hay và ý nghĩa.
      
      Người nhận: ${request.name}
      Mối quan hệ: ${request.relationship}
      Giọng điệu: ${request.tone === 'heartwarming' ? 'ấm áp, tình cảm' : request.tone === 'funny' ? 'hài hước, vui nhộn' : 'thơ mộng, văn chương'}
      
      Yêu cầu:
      - Ngắn gọn, súc tích (dưới 100 từ).
      - Có sử dụng các biểu tượng cảm xúc (emoji) phù hợp với chủ đề Giáng sinh.
      - Không cần tiêu đề, chỉ cần nội dung lời chúc.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Chúc bạn một mùa Giáng sinh an lành và hạnh phúc!";
  } catch (error) {
    console.error("Error generating wish:", error);
    return "Giáng sinh an lành! Chúc bạn luôn vui vẻ và hạnh phúc bên những người thân yêu.";
  }
};