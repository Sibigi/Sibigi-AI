// Sibigi-AI Node.js Express Server Example

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '/')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/index.html'));
});

// API Endpoint for AI Response (Backend route)
app.post('/api/chat', (req, res) => {
    const { message } = req.body;
    
    if (!message) {
        return res.status(400).json({ error: "Message is required" });
    }

    // AI Logic or Integration goes here
    const aiResponse = `Sibigi-AI Response to: "${message}"`;

    res.json({
        success: true,
        reply: aiResponse
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Sibigi-AI Server is running on http://localhost:${PORT}`);
});
