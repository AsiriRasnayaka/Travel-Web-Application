import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Search, MapPin, Star } from 'lucide-react';
import heroImage from '../assets/homepage.jpg';

const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/destinations');
        setDestinations(res.data.slice(0, 3)); // Featured
      } catch (error) {
        console.error('Failed to fetch destinations:', error);
      }
    };
    fetchDestinations();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/destinations?search=${search}`);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Discover the Magic of <span className="text-brand-400">Sri Lanka</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            From pristine beaches to ancient ruins and lush tea gardens. Start your unforgettable journey today.
          </p>

          <form onSubmit={handleSearch} className="bg-white p-2 rounded-full flex items-center max-w-2xl mx-auto shadow-xl">
            <Search className="h-6 w-6 text-gray-400 ml-4" />
            <input
              type="text"
              placeholder="Where do you want to go? (e.g. Ella, Beach)"
              className="flex-grow px-4 py-3 outline-none text-gray-700 bg-transparent"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="bg-brand-600 text-white px-8 py-3 rounded-full font-medium hover:bg-brand-700 transition"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Featured Destinations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our hand-picked selection of the most beautiful places to visit in Sri Lanka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <Link to={`/destinations/${dest._id || dest.name}`} key={dest._id || dest.name} className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-brand-600">
                  ${dest.pricePerNight} / night
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-600 transition">{dest.name}</h3>
                  <div className="flex items-center text-yellow-500 text-sm font-medium">
                    <Star className="h-4 w-4 fill-current mr-1" />
                    {dest.rating}
                  </div>
                </div>
                <div className="flex items-center text-gray-500 mb-4 text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  {dest.location}
                </div>
                <p className="text-gray-600 line-clamp-2 text-sm leading-relaxed">
                  {dest.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/destinations"
            className="inline-block border-2 border-brand-600 text-brand-600 px-8 py-3 rounded-full font-semibold hover:bg-brand-50 transition"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
