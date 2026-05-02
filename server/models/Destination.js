import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  image2: { type: String },
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
  pricePerNight: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model('Destination', destinationSchema);
