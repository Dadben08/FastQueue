import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Government = () => {

  const advantages = [
    "Citizen appointment scheduling",
    "Public service queue management",
    "Departmental queue organization",
    "Reduced office congestion",
    "SMS and email notifications",
    "Document processing tracking",
    "Staff performance analytics",
    "Faster public service delivery",
  ];


  return (
    <div className="min-h-screen bg-gray-50">

      <section className="bg-[#F4400D] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            FastQueue for Government Offices
          </h1>

          <p className="mt-6 text-xl text-red-100">
            Digitize public services by managing citizen queues,
            appointments, and government office traffic efficiently.
          </p>

        </div>
      </section>


      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-8">
          Advantages of FastQueue
        </h2>


        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          FastQueue helps government offices improve citizen experiences
          by reducing overcrowding, organizing public services,
          managing appointments, tracking service requests, and improving
          operational efficiency through real-time queue management.
        </p>


        <div className="grid md:grid-cols-2 gap-6">

          {advantages.map((item)=>(
            <div
              key={item}
              className="flex items-center bg-white p-5 rounded-xl shadow"
            >

              <CheckCircle className="text-[#F4400D] mr-3"/>

              <span className="font-medium">
                {item}
              </span>

            </div>
          ))}

        </div>


        <div className="mt-12">

          <Link
            to="/industry"
            className="text-[#F4400D] font-semibold hover:underline"
          >
            ← Back to Industries
          </Link>

        </div>

      </section>

    </div>
  );
};


export default Government;