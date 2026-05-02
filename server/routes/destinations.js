import express from 'express';
import Destination from '../models/Destination.js';
import { initialDestinations } from '../seed.js';
import mongoose from 'mongoose';

const router = express.Router();

// Get all destinations, with optional category filter
router.get('/', async (req, res) => {
  try {
    const { category, search } = req.query;
    
    // Check if DB is connected
    if (mongoose.connection.readyState !== 1) {
      console.log('Serving from mock data as DB is offline');
      let data = initialDestinations;
      if (category) data = data.filter(d => d.category === category);
      if (search) data = data.filter(d => d.name.toLowerCase().includes(search.toLowerCase()) || d.location.toLowerCase().includes(search.toLowerCase()));
      return res.json(data);
    }

    const query = {};
    if (category) query.category = category;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { location: { $regex: search, $options: 'i' } }
      ];
    }
    
    const destinations = await Destination.find(query);
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single destination
router.get('/:id', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
       // Mock data doesn't have real IDs, so just return the first one or match by some logic
       return res.json(initialDestinations[0]);
    }
    const destination = await Destination.findById(req.params.id);
    if (!destination) return res.status(404).json({ message: 'Not found' });
    res.json(destination);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
