import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MapPin, Star, Calendar, Users, Heart } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

const DestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [bookingData, setBookingData] = useState({ date: '', guests: 1 });

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/destinations/${id}`);
        setDestination(res.data);
      } catch (error) {
        console.error('Failed to fetch destination:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDestination();
  }, [id]);

  const handleBooking = (e) => {
    e.preventDefault();
    if (!user) {
      alert('Please log in to make a booking inquiry.');
      navigate('/login');
      return;
    }
    alert(`Booking inquiry sent for ${destination.name} on ${bookingData.date} for ${bookingData.guests} guests!`);
  };

  const toggleWishlist = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    setIsWishlisted(!isWishlisted);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600"></div>
      </div>
    );
  }

  if (!destination) {
    return <div className="text-center py-20 text-gray-500">Destination not found.</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Image */}
      <div className="relative h-[500px] w-full">
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end">
            <div className="text-white">
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-brand-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                  {destination.category}
                </span>
                <span className="flex items-center text-sm font-medium">
                  <MapPin className="h-4 w-4 mr-1" />
                  {destination.location}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{destination.name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-yellow-400">
                  <Star className="h-5 w-5 fill-current mr-1" />
                  <span className="font-bold text-lg">{destination.rating}</span>
                  <span className="text-gray-300 text-sm ml-2">({destination.reviews} reviews)</span>
                </div>
              </div>
            </div>
            
            <button 
              onClick={toggleWishlist}
              className={`mt-4 md:mt-0 flex items-center px-6 py-3 rounded-full font-medium transition ${
                isWishlisted 
                  ? 'bg-red-500 text-white shadow-lg shadow-red-500/30' 
                  : 'bg-white/20 backdrop-blur-md text-white hover:bg-white/30'
              }`}
            >
              <Heart className={`h-5 w-5 mr-2 ${isWishlisted ? 'fill-current' : ''}`} />
              {isWishlisted ? 'Saved to Wishlist' : 'Save to Wishlist'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About {destination.name}</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {destination.description}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Gallery</h2>
            <div className={`grid ${destination.image2 ? 'grid-cols-2' : 'grid-cols-1'} gap-4`}>
              <img src={destination.image} className="rounded-xl h-48 w-full object-cover" alt="Gallery 1" />
              {destination.image2 && (
                <img src={destination.image2} className="rounded-xl h-48 w-full object-cover" alt="Gallery 2" />
              )}
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Location map placeholder</h2>
            <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center text-gray-500">
               Map Integration goes here (Google Maps or Leaflet)
            </div>
          </section>
        </div>

        {/* Sidebar / Booking Form */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24 border border-gray-100">
            <div className="flex justify-between items-end mb-6 border-b border-gray-100 pb-6">
              <div>
                <span className="text-3xl font-bold text-gray-900">${destination.pricePerNight}</span>
                <span className="text-gray-500 ml-1">/ night</span>
              </div>
              <div className="flex items-center text-sm font-medium text-gray-900">
                <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                {destination.rating}
              </div>
            </div>

            <form onSubmit={handleBooking} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input 
                    type="date" 
                    required
                    value={bookingData.date}
                    onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-700"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select 
                    value={bookingData.guests}
                    onChange={(e) => setBookingData({...bookingData, guests: parseInt(e.target.value)})}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-700 appearance-none bg-white"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-600 text-white py-3 rounded-lg font-bold hover:bg-brand-700 transition shadow-md mt-4"
              >
                Inquire to Book
              </button>
            </form>
            
            <p className="text-center text-sm text-gray-500 mt-4">You won't be charged yet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
