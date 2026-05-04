import React from 'react';
import { Sun, FileText, CreditCard, Bus, Phone, Shield } from 'lucide-react';

const TravelGuide = () => {
  const guideSections = [
    {
      icon: <Sun className="w-8 h-8 text-amber-500" />,
      title: "Best Time to Visit",
      description: "The west and south coasts are best from December to March. For the east coast, April to September offers the perfect sunny weather.",
      bgColor: "bg-amber-50"
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: "Visa Requirements",
      description: "Most travelers require an ETA (Electronic Travel Authorization) before arrival, usually valid for 30 days and easily obtained online.",
      bgColor: "bg-blue-50"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-green-500" />,
      title: "Currency & Payments",
      description: "The Sri Lankan Rupee (LKR) is the local currency. ATMs are widely available, but carrying some cash is recommended for rural areas.",
      bgColor: "bg-green-50"
    },
    {
      icon: <Bus className="w-8 h-8 text-purple-500" />,
      title: "Getting Around",
      description: "Trains offer scenic routes, while buses are cheap and extensive. Tuk-tuks are perfect for short distances (always agree on a price first!).",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Phone className="w-8 h-8 text-red-500" />,
      title: "Connectivity",
      description: "Pick up a local SIM card at the airport (Dialog or Mobitel) for affordable 4G data coverage across most of the island.",
      bgColor: "bg-red-50"
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-500" />,
      title: "Health & Safety",
      description: "Drink bottled or filtered water. Sri Lanka is generally very safe, but standard travel precautions with belongings are advised.",
      bgColor: "bg-teal-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-16 shadow-xl h-[400px]">
          <img 
            src="https://images.pexels.com/photos/319930/pexels-photo-319930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Sri Lanka Train Travel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/20 flex flex-col justify-end p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Essential Travel Guide
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Everything you need to know to prepare for your unforgettable Sri Lankan adventure.
            </p>
          </div>
        </div>

        {/* Guide Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {guideSections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className={`w-16 h-16 rounded-2xl ${section.bgColor} flex items-center justify-center mb-6`}>
                {section.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {section.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>

        {/* Packing List Tip */}
        <div className="bg-brand-600 rounded-2xl p-8 md:p-12 text-white shadow-lg flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h2 className="text-3xl font-bold mb-4">Quick Packing Tip</h2>
            <p className="text-brand-100 text-lg max-w-2xl">
              Pack light, breathable cotton clothing for the coastal areas, but don't forget a warm sweater and modest clothing for visiting the cooler hill country and sacred temples!
            </p>
          </div>
          <button className="bg-white text-brand-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-md whitespace-nowrap">
            Download Checklist
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelGuide;
