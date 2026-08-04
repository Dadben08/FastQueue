import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Restaurant = () => {

  const advantages = [
    "Digital reservation management",
    "Walk-in customer queue handling",
    "Table waiting list management",
    "Customer SMS notifications",
    "Peak-hour crowd control",
    "Improved table turnover",
    "Customer service analytics",
    "Better dining experience",
  ];


  return (
    <div className="min-h-screen bg-gray-50">

      <section className="bg-[#F4400D] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            FastQueue for Restaurants
          </h1>

          <p className="mt-6 text-xl text-red-100">
            Manage reservations, waiting lists, and customer
            flow while delivering a better dining experience.
          </p>

        </div>
      </section>



      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-8">
          Advantages of FastQueue
        </h2>


        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          FastQueue helps restaurants reduce customer waiting times,
          manage reservations efficiently, organize walk-in guests,
          improve table management, and provide customers with
          real-time updates for a smoother dining experience.
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


export default Restaurant;