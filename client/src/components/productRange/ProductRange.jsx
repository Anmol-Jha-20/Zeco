import React from "react";

const ProductRange = () => {
  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
          Product Range
        </h1>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-gray-900 text-lg md:text-sm max-w-3xl mx-auto leading-relaxed">
          We provide a variety of solutions like Air Conditioning, Air
          Distribution and Insulation Pipes
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Air Conditioning */}
          <div className="group text-center">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6 transition-transform duration-300 hover:scale-105">
              <div className="aspect-square bg-gray-100 flex items-center justify-center p-8">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Air Conditioning Unit - HVAC system for temperature control"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              Air Conditioning
            </h2>
          </div>

          {/* Air Distribution */}
          <div className="group text-center">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6 transition-transform duration-300 hover:scale-105">
              <div className="aspect-square bg-gray-100 flex items-center justify-center p-8">
                <img
                  src="https://zecoaircon.com/wp-content/uploads/2022/07/Ducts.png"
                  alt="Air Distribution System - Ventilation ducts and airflow management"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              Air Distribution
            </h2>
          </div>

          {/* Pre-Insulated Pipes */}
          <div className="group text-center md:col-span-2 lg:col-span-1 mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6 transition-transform duration-300 hover:scale-105">
              <div className="aspect-square bg-gray-100 flex items-center justify-center p-8">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Pre-Insulated Pipes - Insulated piping systems for HVAC applications"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              Pre-Insulated Pipes
            </h2>
          </div>
        </div>
      </div>

      {/* Bottom decorative dots */}
      <div className="flex justify-center mt-16 space-x-2">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-3 h-3 bg-gray-300 rounded-full"></div>
        ))}
      </div>
    </div>
  );
};

export default ProductRange;
