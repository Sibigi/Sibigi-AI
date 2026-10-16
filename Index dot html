<!DOCTYPE html>
<html lang="hi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sibigi-AI Assistant</title>
<script src="https://cdn.tailwindcss.com"></script>
<style>
.chat-container {
height: calc(100vh - 180px);
}
</style>
</head>
<body class="bg-gray-900 text-white font-sans flex flex-col h-screen">
​<!-- Navbar -->
<header class="bg-gray-800 border-b border-gray-700 p-4 flex justify-between items-center shadow-lg">
<div class="flex items-center space-x-3">
<div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xl">S</div>
<div>
<h1 class="text-xl font-bold tracking-wide">Sibigi-AI</h1>
<p class="text-xs text-green-400">● System Online</p>
</div>
</div>
<button onclick="clearChat()" class="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded transition">Clear Chat</button>
</header>
​<!-- Chat Area -->
<main id="chatBox" class="chat-container overflow-y-auto p-4 space-y-4 flex-1 max-w-4xl w-full mx-auto">
<!-- AI Welcome Message -->
<div class="flex items-start space-x-3">
<div class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0">S</div>
<div class="bg-gray-800 p-3.5 rounded-lg rounded-tl-none max-w-xl text-gray-200 shadow">
नमस्ते! मैं <strong>Sibigi-AI</strong> हूँ। मैं आपकी क्या मदद कर सकता हूँ?
</div>
</div>
</main>
​<!-- Input Bar -->
<footer class="bg-gray-800 border-t border-gray-700 p-4">
<form id="chatForm" onsubmit="sendMessage(event)" class="max-w-4xl mx-auto flex gap-3">
<input type="text" id="userInput" placeholder="Sibigi-AI से कुछ पूछें..." required
class="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition">
<button type="submit" class="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition flex items-center gap-2">
Send
</button>
</form>
</footer>
​<!-- JS Logic -->
<script>
const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
​function sendMessage(e) {
e.preventDefault();
const text = userInput.value.trim();
if (!text) return;
​// User Message UI
appendMessage('You', text, 'user');
userInput.value = '';
​// Simulated AI Response
setTimeout(() => {
const aiResponse = generateResponse(text);
appendMessage('Sibigi-AI', aiResponse, 'ai');
}, 600);
}
​function appendMessage(sender, text, type) {
const msgDiv = document.createElement('div');
msgDiv.className = flex items-start space-x-3 ${type === 'user' ? 'justify-end' : ''};
​if (type === 'user') {
msgDiv.innerHTML = <div class="bg-blue-600 p-3.5 rounded-lg rounded-tr-none max-w-xl text-white shadow"> ${text} </div>;
} else {
msgDiv.innerHTML = <div class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0">S</div> <div class="bg-gray-800 p-3.5 rounded-lg rounded-tl-none max-w-xl text-gray-200 shadow"> ${text} </div>;
}
​chatBox.appendChild(msgDiv);
chatBox.scrollTop = chatBox.scrollHeight;
}
​function generateResponse(input) {
const lower = input.toLowerCase();
if (lower.includes('hello') || lower.includes('hi') || lower.includes('नमस्ते')) {
return 'नमस्ते! आप कैसे हैं? मैं आपकी कैसे सहायता कर सकता हूँ?';
} else if (lower.includes('who are you') || lower.includes('कौन हो')) {
return 'मैं Sibigi-AI हूँ, आपका अपना पर्सनल AI असिस्टेंट।';
} else {
return आपने कहा: "${input}"। मैं जल्द ही आपकी इस क्वेरी का और बेहतर उत्तर देने के लिए अपडेट हो रहा हूँ!;
}
}
​function clearChat() {
chatBox.innerHTML = <div class="flex items-start space-x-3"> <div class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0">S</div> <div class="bg-gray-800 p-3.5 rounded-lg rounded-tl-none max-w-xl text-gray-200 shadow"> चैट रीसेट कर दी गई है। पूछिए, मैं आपकी क्या मदद कर सकता हूँ? </div> </div>;
}
</script>
</body>
</html>
