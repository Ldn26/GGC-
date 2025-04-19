import React from 'react';

const HelpCenter = () => {
  const categories = [
    'First steps',
    'Shipping',
    'Payments',
    'Report an issue',
    'Contact us',
    'Returns',
    'Account Settings',
    'Support',
  ];

  return (
    <div className="bg-white  items-center justify-center flex-col    min-h-screen p-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Help Center</h1>
        <div className="flex justify-center mt-6 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search for help..."
            className="flex-1 p-3 border-2 border-gray-300 rounded-l-md text-base"
          />
          <button className="bg-gray-800 text-white px-5 rounded-r-md hover:bg-gray-700">
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`h-28 flex items-center justify-center text-white font-bold text-center rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 ${
              index < 4 ? 'bg-purple-900' : 'bg-green-700'
            }`}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCenter;
