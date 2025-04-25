import React from "react";
import bannerImg from "../../assets/banner-img-1.png"
const Hero = () => {
  return (
    <div>
      <div className="bg-white mt-10 mx-10 py-20 px-4 sm:px-6 lg:px-20 rounded-lg shadow">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dependable Care, Backed by Trusted Professionals.
            </h1>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience. Whether it's
              a routine checkup or urgent consultation, book appointments in
              minutes and receive quality care you can trust.
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="relative w-full max-w-3xl">
              <input
                type="text"
                placeholder="Search for doctor..."
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-0 top-0 h-full px-6 py-3 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 transition-colors">
                Search Now
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-lg">
              <img
                src={bannerImg || "/placeholder.svg"}
                alt="Healthcare professionals"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src={bannerImg || "/placeholder.svg"}
                alt="Healthcare professionals"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
