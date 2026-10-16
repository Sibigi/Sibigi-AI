// Sibigi-AI Configuration Settings

const CONFIG = {
    PROJECT_NAME: "Sibigi-AI",
    VERSION: "1.0.0",
    API_BASE_URL: "https://api.sibigi-ai.local/v1", // Replace with your actual backend or AI API endpoint
    THEME: "dark",
    ENABLE_LOGS: true,
    MAX_CHAT_HISTORY: 50
};

// Freeze object to prevent accidental modifications
Object.freeze(CONFIG);

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
