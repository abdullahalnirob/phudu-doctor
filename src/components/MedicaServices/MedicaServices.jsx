import { ClipboardList, Star, Users, UserPlus } from "lucide-react";
import CountUp from "react-countup";
import clicpbord from "../../assets/success-doctor.png";
import reviwe from "../../assets/success-review.png";
import patients from "../../assets/success-patients.png";
import staffs from "../../assets/success-staffs.png";
const MedicaServices = () => {
  const stats = [
    {
      id: 1,
      number: 199,
      label: "Total Doctors",
      suffix: "+",
      icon: <img src={clicpbord} alt="" />,
    },
    {
      id: 2,
      number: 467,
      label: "Total Reviews",
      suffix: "+",
      icon: <img src={reviwe} alt="" />,
    },
    {
      id: 3,
      number: 1900,
      label: "Patients",
      suffix: "+",
      icon: <img src={patients} alt="" />,
    },
    {
      id: 4,
      number: 300,
      label: "Total Stuffs",
      suffix: "+",
      icon: <img src={staffs} alt="" />,
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            We Provide Best Medical Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center"
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">
                <CountUp
                  end={stat.number}
                  duration={0.5}
                  suffix={stat.suffix}
                />
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicaServices;
