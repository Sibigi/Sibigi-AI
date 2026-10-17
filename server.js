/**
======================================================
* Production-Ready Server.js for Node.js & Express
======================================================
*/

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

// ऐप को इनिशियलाइज़ करें
const app = express();
const PORT = process.env.PORT || 5000;

// ======================================================
// 1. मिडलवेयर (Middlewares) सेटअप
// ======================================================

// सुरक्षा के लिए Helmet
app.use(helmet());

// CORS कॉन्फ़िगरेशन
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// रिक्वेस्ट लॉगिंग के लिए Morgan
app.use(morgan('dev'));

// JSON डेटा पार्स करने के लिए
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// स्टैटिक फाइलों को सर्व करने के लिए
app.use(express.static(path.join(__dirname, 'public')));


// ======================================================
// 2. API रूट्स (API Routes)
// ======================================================

// होम रूट
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'सर्वर सफलतापूर्वक चल रहा है!',
        timestamp: new Date().toISOString()
    });
});

// हेल्थ चेक रूट
app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        uptime: process.uptime(),
        memoryUsage: process.memoryUsage()
    });
});

// एक उदाहरण डेटा रूट
app.post('/api/data', (req, res) => {
    const { name, message } = req.body;

    if (!name) {
        return res.status(400).json({
            success: false,
            error: 'कृपया नाम (name) प्रदान करें।'
        });
    }

    res.status(201).json({
        success: true,
        message: 'डेटा सफलतापूर्वक प्राप्त हुआ!',
        data: { name, message: message || 'कोई संदेश नहीं' }
    });
});


// ======================================================
// 3. एरर हैंडलिंग मिडलवेयर (Error Handling)
// ======================================================

// 404 - रूट न मिलने पर (Not Found Handler)
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        error: 'एंडपॉइंट नहीं मिला (Endpoint Not Found)'
    });
});

// ग्लोबल एरर हैंडलर (Global Error Handler)
app.use((err, req, res, next) => {
    console.error('इंटरनल सर्वर एरर:', err.stack);
    res.status(500).json({
        success: false,
        error: 'कुछ आंतरिक सर्वर त्रुटि हुई है!',
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});


// ======================================================
// 4. सर्वर को शुरू करना (Start Server)
// ======================================================

app.listen(PORT, () => {
    console.log('======================================');
    console.log(`🚀 सर्वर ${PORT} पोर्ट पर चल रहा है`);
    console.log(`🔗 URL: http://localhost:${PORT}`);
    console.log('======================================');
});

