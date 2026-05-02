import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import destinationRoutes from './routes/destinations.js';
import { seedDestinations } from './seed.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/destinations', destinationRoutes);

app.get('/', (req, res) => {
  res.send('Sri Lanka Travel API is running');
});

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/srilankatravel')
  .then(async () => {
    console.log('Connected to MongoDB');
    // Seed initial data if needed
    await seedDestinations();
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
    console.log('Starting server without DB connection for demo purposes...');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} (DB offline)`);
    });
  });
