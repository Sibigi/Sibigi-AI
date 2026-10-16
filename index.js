const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Sibigi-AI Server is Running!');
});

// Aapka chat endpoint
app.post('/chat', (req, res) => {
  const userInput = req.body.message;
  let aiResponse = "Namaste! Main aapki kya sahayata kar sakta hoon?";

  if (userInput && userInput.toLowerCase().includes('hello')) {
    aiResponse = "Hello! Kaise hain aap?";
  } else if (userInput) {
    aiResponse = "Aapne kaha: " + userInput;
  }

  res.json({ reply: aiResponse });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
