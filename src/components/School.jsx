import React from "react";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const School = () => {
  const advantages = [
    "Digital admission queues",
    "Student service appointments",
    "Registry queue management",
    "Reduced campus congestion",
    "SMS and email notifications",
    "Real-time queue tracking",
    "Online appointment scheduling",
    "Faster document collection",
    "Improved staff productivity",
    "Queue analytics and reporting",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-[#F4400D] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold">
            FastQueue for Schools & Universities
          </h1>
          <p className="mt-6 text-xl text-red-100 max-w-3xl leading-relaxed">
            Eliminate long queues in admissions, registry, bursary, and student
            services while improving administrative efficiency and the overall
            student experience.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Advantages of FastQueue
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          FastQueue helps schools and universities streamline admissions,
          registration, bursary, registry, and student service operations by
          providing digital queue management, appointment scheduling, real-time
          queue tracking, SMS and email notifications, reduced waiting times,
          improved staff productivity, better crowd control, and valuable
          analytics that enhance the overall student experience and
          administrative efficiency.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {advantages.map((item) => (
            <div
              key={item}
              className="flex items-center bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <CheckCircle className="text-[#F4400D] mr-3" size={22} />
              <span className="font-medium text-gray-800">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/industry"
            className="inline-flex items-center px-6 py-3 border border-[#F4400D] text-[#F4400D] rounded-full font-semibold hover:bg-[#F4400D] hover:text-white transition"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to industries
          </Link>
        </div>
      </section>
    </div>
  );
};

export default School;