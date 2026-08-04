import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Hotel = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      <section className="bg-[#F4400D] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            FastQueue for Hotels
          </h1>

          <p className="mt-6 text-xl text-red-100">
            Enhance guest experience by managing check-ins, reservations,
            and hotel services efficiently.
          </p>

        </div>
      </section>


      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-8">
          Advantages of FastQueue
        </h2>


        <p className="text-gray-700 text-lg leading-relaxed mb-8">

          FastQueue helps hotels deliver faster and better guest services by
          managing front desk queues, reservations, check-ins, room services,
          and guest requests through a digital queue system. It reduces waiting
          times, improves staff coordination, enhances guest satisfaction, and
          provides valuable insights into hotel operations.

        </p>


        <div className="grid md:grid-cols-2 gap-6">

          {[
            "Digital guest check-in queues",
            "Reservation management",
            "Front desk queue control",
            "Guest notification system",
            "Room service request tracking",
            "Hotel service analytics",
          ].map((item) => (

            <div
              key={item}
              className="flex items-center bg-white p-5 rounded-xl shadow"
            >

              <CheckCircle className="text-green-600 mr-3" />

              <span className="font-medium">
                {item}
              </span>

            </div>

          ))}

        </div>


        <div className="mt-12">

          <Link
            to="/industry"
            className="text-red-600 font-semibold hover:underline"
          >
            ← Back to Industries
          </Link>

        </div>


      </section>

    </div>
  );
};

export default Hotel;