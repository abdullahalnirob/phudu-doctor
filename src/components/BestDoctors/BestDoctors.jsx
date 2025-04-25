import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BestDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    fetch("./doctorData.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.error("Failed to load doctor data:", error));
  }, []);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Best Doctors
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Connect with trusted and experienced doctors easily. Book
            appointments quickly and get quality care anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.slice(0, visibleCount).map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <div className="p-5">
                <img
                  src={doctor.doctorImage}
                  alt={doctor.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                    Available
                  </span>
                  <span className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                    {doctor.experience}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {doctor.name}
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Reg No: {doctor.registrationNumber}</span>
                </div>
                <Link to={`/doctor/${doctor.id}`} className="block">
                  <button className="w-full py-2 px-4 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition-colors">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < doctors.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleViewMore}
              className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BestDoctors;
