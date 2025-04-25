import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDoctor, removeItem } from "../../../utils/addDoctor";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const MyBooking = () => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  const bookingData = useLoaderData();
  // console.log(bookingData);
  const [myApp, setmyApp] = useState([]);

  useEffect(() => {
    const bookastoreData = getDoctor();
    const myAppoin = bookingData.filter((book) =>
      bookastoreData.includes(book.id)
    );
    setmyApp(myAppoin);
  }, []);

  const remove = (id) => {
    removeItem(id);
    window.location.reload();
  };

  return (
    <div className="px-20">
      <div className="flex items-center justify-center my-5">
        <BarChart
          width={1000}
          className="w-full"
          height={300}
          data={myApp.map((doc) => ({
            name: doc.name,
            uv: parseInt(doc.consultationFee), // ফি সংখ্যায় কনভার্ট করছি
          }))}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="uv"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {myApp.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </div>

      <div className="text-center py-10">
        <h1 className="font-bold text-3xl">My Today Appointments</h1>
        <p>
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>

      {myApp.length === 0 ? (
        <p className="text-center text-gray-500">No appointments found.</p>
      ) : (
        myApp.map((appointment) => (
          <div
            key={appointment.id}
            className="px-6 py-5 rounded-2xl shadow bg-white mb-4"
          >
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-2xl">{appointment.name}</h1>
              <p>Appointment Fee: {appointment.consultationFee} Taka + VAT</p>
            </div>
            <div>
              <p className="my-2 text-gray-500">{appointment.education}</p>
            </div>
            <div className="my-3">
              <button
                onClick={() => remove(appointment.id)}
                className="w-full px-6 py-2 text-red-600 ring-1 ring-red-600 cursor-pointer hover:bg-red-600 hover:text-white duration-300 rounded-full"
              >
                Cancel Appointment
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyBooking;
