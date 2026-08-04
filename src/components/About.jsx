import React from "react";
import "./About.css";

const About = () => {
  return (
   <section
  className="about-container relative py-24 overflow-hidden"
  id="about"
>
      {/* soft background glow */}
     <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#111827,transparent_60%)] pointer-events-none"></div>

      <div className="relative  max-w-6xl mx-auto px-2 z-10">

        {/* HERO */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-6xl font-bold text-[#ffffff]">
            About <span className="text-[#f4400d]">FastQueues</span>
          </h1>
          <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
            Smart. Simple. Seamless queue management for modern businesses.
          </p>
        </div>

        {/* CONTENT */}
        <div className="space-y-8 text-white text-base leading-relaxed">

          <p>
            <strong>FastQueues</strong> is a next-generation queue management
            system designed to help organizations handle customers with ease.
            Whether in <span className="text-[#f4400d] font-semibold">Banks</span>,
            <span className="text-[#f4400d] font-semibold"> Schools</span>,
            <span className="text-[#f4400d] font-semibold"> Hospitals</span>,
            or <span className="text-[#f4400d] font-semibold">Businesses</span>,
            it removes long queues and improves service flow.
          </p>

          <p>
            With FastQueues, customers no longer wait in crowded spaces. They
            can join queues remotely, track progress in real time, and receive
            instant updates—making waiting stress-free and efficient.
          </p>

          <p>
            Our mission is simple:
            <span className="font-semibold text-[#fff]">
              {" "}
              to streamline customer flow and empower businesses with smart,
              reliable queue management solutions.
            </span>
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6">

          {[
            {
              title: "Reduce Wait Times",
              desc: "Keep customers happy and stress-free.",
            },
            {
              title: "Eliminate Crowds",
              desc: "No more congested waiting areas.",
            },
            {
              title: "Boost Efficiency",
              desc: "Manage customer flow seamlessly.",
            },
            {
              title: "Enhance Experience",
              desc: "Deliver smooth and modern service.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-2xl border border-gray-200 shadow-sm
              transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-[#f4400d30]"
            >
              <h3 className="text-lg font-semibold text-[#2f2a76] group-hover:text-[#f4400d] transition">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-20 text-center">
          <p className="text-white max-w-3xl mx-auto">
            At <strong>FastQueues</strong>, we believe queue management should
            be effortless, intelligent, and human-centered—built for trust,
            efficiency, and satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;