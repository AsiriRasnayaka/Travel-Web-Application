import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from './models/Destination.js';
import { initialDestinations } from './seed.js';

dotenv.config();

const updateImages = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/srilankatravel');
    console.log('Connected to MongoDB');
    
    // Update existing documents with the new images from initialDestinations
    for (const dest of initialDestinations) {
      await Destination.updateOne(
        { name: dest.name },
        { $set: { image: dest.image, image2: dest.image2 } }
      );
    }
    
    console.log('Image URLs updated successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error updating images:', error);
    process.exit(1);
  }
};

updateImages();
