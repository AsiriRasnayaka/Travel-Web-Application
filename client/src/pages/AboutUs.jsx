import React from 'react';
import { MapPin, Users, Award, Heart } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Sri Lanka Travel
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-900 max-w-3xl mx-auto">
            Your trusted companion for exploring the wonders of Sri Lanka
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Sri Lanka landscape"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Story
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Sri Lanka Travel was founded with a passion for showcasing the incredible beauty and rich culture of Sri Lanka.
              From pristine beaches to ancient temples, misty mountains to vibrant wildlife, we believe every traveler
              deserves to experience the magic of this beautiful island nation.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our team of local experts and travel enthusiasts carefully curate destinations to ensure you have
              authentic, memorable experiences that go beyond typical tourist attractions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg text-center shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full mb-4">
              <MapPin className="w-8 h-8 text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">15+</h3>
            <p className="text-gray-600 dark:text-gray-400">Destinations</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg text-center shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full mb-4">
              <Users className="w-8 h-8 text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">1000+</h3>
            <p className="text-gray-600 dark:text-gray-400">Happy Travelers</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg text-center shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full mb-4">
              <Award className="w-8 h-8 text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">4.8</h3>
            <p className="text-gray-600 dark:text-gray-400">Average Rating</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg text-center shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full mb-4">
              <Heart className="w-8 h-8 text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">100%</h3>
            <p className="text-gray-600 dark:text-gray-400">Satisfaction</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Local Expertise
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our team consists of local experts who know Sri Lanka inside out, ensuring authentic experiences.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Curated Selection
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every destination is handpicked and verified to meet our high standards of quality and authenticity.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                24/7 Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
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
