// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for all origins or configure for React frontend
app.use(cors({
  origin: 'http://localhost:5173',  // This is the port your React app is running on
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Example route for fetching products
app.get('/products', (req, res) => {
  // Your mock product data
  const products = [
    { id: 1, name: 'T-Shirt', price: 20 },
    { id: 2, name: 'Hat', price: 15 },
    { id: 3, name: 'Mug', price: 10 },
  ];

  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
