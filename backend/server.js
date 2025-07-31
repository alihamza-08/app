// backend/server.js
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

// Sample data
const users = [
  { id: 1, name: 'Ali' },
  { id: 2, name: 'Hamza' },
];

const products = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Mobile' },
];

// API routes
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
