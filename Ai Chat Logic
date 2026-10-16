// Sibigi-AI Main Logic

document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chatForm');
    const userInput = document.getElementById('userInput');
    const chatBox = document.getElementById('chatBox');

    if (chatForm) {
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const message = userInput.value.trim();
            if (!message) return;

            // Add user message
            addMessage('You', message, 'user');
            userInput.value = '';

            // Simulate AI response
            setTimeout(() => {
                const response = getAIResponse(message);
                addMessage('Sibigi-AI', response, 'ai');
            }, 500);
        });
    }
});

function addMessage(sender, text, type) {
    const chatBox = document.getElementById('chatBox');
    if (!chatBox) return;

    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${type}`;

    msgDiv.innerHTML = `
        <div class="avatar">${type === 'user' ? 'U' : 'S'}</div>
        <div class="message-content">${text}</div>
    `;

    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getAIResponse(input) {
    const cleanInput = input.toLowerCase();

    if (cleanInput.includes('hello') || cleanInput.includes('hi') || cleanInput.includes('नमस्ते')) {
        return 'नमस्ते! मैं Sibigi-AI हूँ। मैं आपकी क्या सहायता कर सकता हूँ?';
    } else if (cleanInput.includes('help') || cleanInput.includes('मदद')) {
        return 'मैं आपको कोडिंग, एआई प्रोजेक्ट्स और सामान्य प्रश्नों में मदद कर सकता हूँ।';
    } else {
        return `आपका संदेश प्राप्त हुआ: "${input}"। Sibigi-AI जल्द ही और अधिक फीचर्स के साथ अपडेट होगा!`;
    }
}
