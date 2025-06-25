import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { addDoctor } from "../../utils/addDoctor";
const Doctor = () => {
  const id = useParams();
  const data = useLoaderData();
  const indexId = parseFloat(id.id);

  const handleBookDoctor = () => {
    addDoctor(indexId);
  };

  const doctor = data[indexId - 1];

  const {
    doctorImage,
    name,
    speciality,
    consultationFee,
    workingAt,
    registrationNumber,
    education,
  } = doctor;
  return (
    <div className="mx-auto py-8 px-20">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
        <h1 className="text-2xl font-bold text-center mb-2">
          Doctor's Profile Details
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Our doctors are highly trained with years of experience and modern
          medical knowledge. We prioritize personalized and compassionate care
          for every patient. Get safe, accessible, and timely medical support
          whenever you need it.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <img
              src={doctorImage}
              alt="Dr. Cameron Williamson"
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">{name}</h2>
            <p className="text-gray-700 mb-1">{education}</p>
            <p className="text-gray-700 mb-4">{speciality}</p>

            <div className="mb-4">
              <p className="text-gray-700 font-medium">Working at</p>
              <p className="text-gray-900">{workingAt}</p>
            </div>

            <div className="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 mr-2"
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
              <span className="text-gray-700">
                Reg No: {registrationNumber}
              </span>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-medium mb-2">Availability</p>
              <div className="flex flex-wrap gap-2">
                {doctor?.availability?.map((day) => {
                  const dayStyles = {
                    monday: "bg-blue-100 text-blue-800",
                    tuesday: "bg-yellow-100 text-yellow-800",
                    wednesday: "bg-green-100 text-green-800",
                    thursday: "bg-orange-100 text-orange-800",
                    friday: "bg-purple-100 text-purple-800",
                    saturday: "bg-pink-100 text-pink-800",
                    sunday: "bg-red-100 text-red-800",
                  };
                  const bgColorClass =
                    dayStyles[day.toLowerCase()] || "bg-gray-100 text-gray-800";

                  return (
                    <span
                      key={day}
                      className={`px-3 py-1 rounded-full text-sm ${bgColorClass}`}
                    >
                      {day}
                    </span>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-2">
                Consultation Fee:
              </p>
              <div className="flex items-center">
                <span className="text-gray-900 font-medium mr-2">
                  Taka: {consultationFee}
                </span>
                <span className="text-sm text-gray-500">Per consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold">Book an Appointment</h3>
        </div>

        <div className="mb-6">
          <div className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-gray-600 text-sm">
              Due to high patient cut-off, we recommend booking appointments for
              today only. No appointments are automatically scheduled for other
              patients.
            </p>
          </div>
        </div>

        <button
          onClick={() => handleBookDoctor(id)}
          className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-full transition-colors"
        >
          Book Appointment Now
        </button>
      </div>
    </div>
  );
};

export default Doctor;
