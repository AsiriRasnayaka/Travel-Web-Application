import React from 'react';

const TravelGuide = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Travel Guide</h1>
      <p className="text-lg text-gray-600 mb-8">
        Everything you need to know before visiting Sri Lanka.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Best Time to Visit</h2>
          <p className="text-gray-600">The best time to visit the west and south coasts and hill country is from December to March, while the best weather on the east coast is from April/May to September.</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Visa Requirements</h2>
          <p className="text-gray-600">Most travelers require an Electronic Travel Authorization (ETA) prior to arrival. It's usually valid for 30 days and can be applied for online.</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Currency</h2>
          <p className="text-gray-600">The local currency is the Sri Lankan Rupee (LKR). ATMs are widely available, and credit cards are accepted at most hotels and larger restaurants.</p>
        </div>
      </div>
    </div>
  );
};

export default TravelGuide;
