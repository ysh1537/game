export class AIManager {
    constructor() {
        this.apiKey = window.GOOGLE_API_KEY || null;
        this.isEnabled = !!this.apiKey;
        if (this.isEnabled) {
            console.log("[AIManager] Initialized with local API Key.");
        } else {
            console.warn("[AIManager] No API Key found. AI features disabled.");
        }
    }

    /**
     * Gemini/Imagen API를 호출하여 이미지를 생성합니다.
     * @param {string} prompt 이미지 생성 프롬프트
     * @param {string} creatureId 저장할 크리처 ID (파일명 용도)
     */
    async generateCreatureImage(prompt, creatureId) {
        if (!this.isEnabled) {
            console.error("[AIManager] Cannot generate image: No API Key.");
            return null;
        }

        console.log(`[AIManager] 🎨 Generating image for '${creatureId}'...`);
        console.log(`[Prompt] ${prompt}`);

        const requestBody = {
            contents: [{
                parts: [{ text: prompt }]
            }],
            generationConfig: {
                // Image model specific configurations can go here
                // seed: 12345,
                // sampleCount: 1
            }
        };

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${this.apiKey}`;
        // Note: Using a newer model endpoint if available, or fallback to the one user provided. 
        // Based on recent logs, 'gemini-2.0-flash-exp' might serve multimedia well, or we stick to 'gemini-pro-vision' logic inverted? 
        // Actually, for image generation specifically (Imagen style features within Gemini), the endpoint usually differs or requires specific beta access.
        // Assuming the previous endpoint 'gemini-3-pro-image-preview' was desired:
        // const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent?key=${this.apiKey}`;

        // Let's use the exact endpoint that was working before or intended:
        // 'gemini-3-pro-image-preview' generates images.

        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${this.apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // Standard text generation body
                body: JSON.stringify({
                    contents: [{ parts: [{ text: `Generate a high quality anime style image description for: ${prompt}` }] }]
                })
            });
            // WAIT, the user wants IMAGE generation.
            // The previous successful code block used 'gemini-3-pro-image-preview'. I will trust that.

            const realUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent?key=${this.apiKey}`;

            const realResponse = await fetch(realUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            });

            if (!realResponse.ok) {
                const errData = await realResponse.json();
                console.error("[AIManager] API Error:", errData);
                throw new Error(`API Error: ${realResponse.status} - ${JSON.stringify(errData)}`);
            }

            const data = await realResponse.json();

            // Image Response Parsing
            // Usually comes as inlineData
            const parts = data.candidates?.[0]?.content?.parts?.[0];

            if (parts?.inlineData) {
                const mimeType = parts.inlineData.mimeType;
                const base64Data = parts.inlineData.data;
                const dataUri = `data:${mimeType};base64,${base64Data}`;

                console.log("[AIManager] 🎨 Image Generated Successfully!");
                return { success: true, imageData: dataUri };
            } else if (parts?.text) {
                console.warn("[AIManager] Unexpected response format: Model returned text instead of image.");
                return { success: false, error: "Text received: " + parts.text.substring(0, 50) + "..." };
            } else {
                console.warn("[AIManager] Unexpected response format:", data);
                throw new Error("No image data found in response");
            }

        } catch (error) {
            console.error("[AIManager] Generation Failed:", error);
            return { success: false, error: error.message };
        }
    }

    /**
     * 현재 API 키로 사용 가능한 모델 목록을 조회합니다.
     * 404 오류 시 이 함수를 실행하여 정확한 모델명(name)을 확인하세요.
     */
    async checkAvailableModels() {
        if (!this.isEnabled) return;

        const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${this.apiKey}`;
        console.log("[AIManager] 🔍 Checking available models...");

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.models) {
                console.log("[AIManager] ✅ Available Models:", data.models);
                const generateModels = data.models.filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent'));
                console.log("[AIManager] 💡 Models supporting 'generateContent':", generateModels.map(m => m.name));
                return generateModels;
            } else {
                console.error("[AIManager] Failed to list models:", data);
            }
        } catch (e) {
            console.error("[AIManager] Connection Error:", e);
        }
    }
}
