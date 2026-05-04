import React from 'react';
import { MapPin, Users, Award, Heart } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Sri Lanka Travel
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted companion for exploring the wonders of Sri Lanka
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Sri Lanka landscape"
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Sri Lanka Travel was founded with a passion for showcasing the incredible beauty and rich culture of Sri Lanka.
              From pristine beaches to ancient temples, misty mountains to vibrant wildlife, we believe every traveler
              deserves to experience the magic of this beautiful island nation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team of local experts and travel enthusiasts carefully curate destinations to ensure you have
              authentic, memorable experiences that go beyond typical tourist attractions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-50 rounded-2xl mb-6">
              <MapPin className="w-8 h-8 text-brand-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
            <p className="text-gray-500 font-medium">Destinations</p>
          </div>

          <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-50 rounded-2xl mb-6">
              <Users className="w-8 h-8 text-brand-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">1000+</h3>
            <p className="text-gray-500 font-medium">Happy Travelers</p>
          </div>

          <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-50 rounded-2xl mb-6">
              <Award className="w-8 h-8 text-brand-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">4.8</h3>
            <p className="text-gray-500 font-medium">Average Rating</p>
          </div>

          <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-50 rounded-2xl mb-6">
              <Heart className="w-8 h-8 text-brand-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
            <p className="text-gray-500 font-medium">Satisfaction</p>
          </div>
        </div>

        <div className="bg-brand-600 rounded-3xl shadow-xl p-12 mb-16 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-brand-700/50 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">
                Local Expertise
              </h3>
              <p className="text-brand-100 leading-relaxed">
                Our team consists of local experts who know Sri Lanka inside out, ensuring authentic experiences.
              </p>
            </div>
            <div className="bg-brand-700/50 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">
                Curated Selection
              </h3>
              <p className="text-brand-100 leading-relaxed">
                Every destination is handpicked and verified to meet our high standards of quality and authenticity.
              </p>
            </div>
            <div className="bg-brand-700/50 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">
                24/7 Support
              </h3>
              <p className="text-brand-100 leading-relaxed">
                We're always here to help you plan your perfect Sri Lankan adventure, any time of day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
