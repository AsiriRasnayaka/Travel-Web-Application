import mongoose from 'mongoose';
import Destination from './models/Destination.js';

export const initialDestinations = [
  {
    name: 'Sigiriya Rock Fortress',
    description: 'An ancient palace and fortress complex that has significant archaeological importance and attracts thousands of tourists every year.',
    location: 'Central Province',
    category: 'Heritage',
    image: '/src/assets/Sigiriya-Rock-Sri-Lanka.jpg',
    image2: '/src/assets/sigiriya 1.jpg',
    rating: 4.8,
    reviews: 1240,
    pricePerNight: 50,
  },
  {
    name: 'Ella Nine Arch Bridge',
    description: 'One of the most iconic bridges in Sri Lanka, surrounded by lush greenery and tea plantations.',
    location: 'Uva Province',
    category: 'Nature',
    image: '/src/assets/Nine-Arch-Bridge-Ella-1200x630-1.jpg',
    image2: '/src/assets/nine arch bridge 2.jpg',
    rating: 4.9,
    reviews: 980,
    pricePerNight: 40,
  },
  {
    name: 'Mirissa Beach',
    description: 'A beautiful crescent beach, perfect for surfing, whale watching, and enjoying the vibrant nightlife.',
    location: 'Southern Province',
    category: 'Beach',
    image: '/src/assets/Mirissa beach 1.jpg',
    image2: '/src/assets/mirissa beach 2.jpg',
    rating: 4.7,
    reviews: 850,
    pricePerNight: 60,
  },
  {
    name: 'Yala National Park',
    description: 'The most visited and second largest national park in Sri Lanka, known for its variety of wild animals, especially leopards.',
    location: 'Southern/Uva Province',
    category: 'Wildlife',
    image: '/src/assets/yala national park.jpg',
    image2: '/src/assets/yala national park 1.jpg',
    rating: 4.6,
    reviews: 1100,
    pricePerNight: 80,
  },
  {
    name: 'Temple of the Sacred Tooth Relic',
    description: 'A Buddhist temple in the city of Kandy, Sri Lanka. It is located in the royal palace complex of the former Kingdom of Kandy.',
    location: 'Kandy',
    category: 'Heritage',
    image: '/src/assets/temple of tooth relic 1.jpg',
    image2: '/src/assets/temple of tooth relic 2.jpg',
    rating: 4.9,
    reviews: 2100,
    pricePerNight: 45,
  },
  {
    name: 'Galle Fort',
    description: 'A historical, archaeological and architectural heritage monument, which even after more than 432 years maintains a polished appearance.',
    location: 'Southern Province',
    category: 'Heritage',
    image: '/src/assets/galle fort 1.jpg',
    image2: '/src/assets/galle fort 2.jpg',
    rating: 4.8,
    reviews: 1560,
    pricePerNight: 70,
  }
];

export const seedDestinations = async () => {
  try {
    const count = await Destination.countDocuments();
    if (count === 0) {
      await Destination.insertMany(initialDestinations);
      console.log('Seeded initial destinations successfully.');
    }
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};
