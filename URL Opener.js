const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Enable CORS (if frontend is separate)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Route to receive URL and redirect
app.post('/open-url', (req, res) => {
  const { url } = req.body;

  if (!url || !url.startsWith('http')) {
    return res.status(400).json({ error: 'Invalid URL' });
  }

  return res.status(200).json({ message: 'URL received', redirectTo: url });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
