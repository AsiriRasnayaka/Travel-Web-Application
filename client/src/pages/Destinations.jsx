import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { MapPin, Star, Filter } from 'lucide-react';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('');
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialSearch = searchParams.get('search') || '';
  const [search, setSearch] = useState(initialSearch);

  useEffect(() => {
    const fetchDestinations = async () => {
      setLoading(true);
      try {
        let url = 'http://localhost:5000/api/destinations?';
        if (category) url += `category=${category}&`;
        if (search) url += `search=${search}&`;
        
        const res = await axios.get(url);
        setDestinations(res.data);
      } catch (error) {
        console.error('Failed to fetch destinations:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDestinations();
  }, [category, search]);

  const categories = ['All', 'Beach', 'Heritage', 'Nature', 'Wildlife'];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Destinations</h1>
          <p className="text-gray-600 max-w-2xl">Find your next adventure in Sri Lanka.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat === 'All' ? '' : cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  (category === cat || (category === '' && cat === 'All'))
                    ? 'bg-brand-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search destinations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
            />
            <Filter className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.length > 0 ? (
              destinations.map((dest) => (
                <Link to={`/destinations/${dest._id || dest.name}`} key={dest._id || dest.name} className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={dest.image} 
                      alt={dest.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white tracking-wider uppercase">
                      {dest.category}
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-600 transition line-clamp-1">{dest.name}</h3>
                    </div>
                    <div className="flex items-center text-gray-500 mb-4 text-sm">
                      <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                      <span className="truncate">{dest.location}</span>
                    </div>
                    <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed mb-4 flex-grow">
                      {dest.description}
                    </p>
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center text-yellow-500 text-sm font-medium">
                        <Star className="h-4 w-4 fill-current mr-1" />
                        {dest.rating} <span className="text-gray-400 ml-1 font-normal">({dest.reviews})</span>
                      </div>
                      <div className="font-bold text-gray-900">
                        ${dest.pricePerNight}<span className="text-gray-500 text-sm font-normal">/night</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-3 text-center py-20 text-gray-500">
                No destinations found matching your criteria.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;
