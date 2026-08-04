import React from "react";
import { Link } from "react-router-dom";
import { features } from "../constants";

const Features = () => {
  return (
    <section
      id="features"
      className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#f4400d10] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-[#f4400d10] text-[#f4400d] font-semibold text-sm mb-5">
            Powerful Features
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold text-[#2f2a76] leading-tight mb-6">
            Everything You Need for
            <br />
            Smarter Queue Management
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            FastQueue gives businesses complete control over customer flow with
            real-time queue monitoring, smart ticketing, analytics, and
            seamless digital experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col h-full p-8 rounded-3xl bg-white border border-gray-200 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-[#f4400d30]"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#f4400d08] to-transparent" />

              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#f4400d10] flex items-center justify-center group-hover:bg-[#f4400d20] transition-colors duration-300">
                  {React.cloneElement(feature.icon, {
                    className: `w-8 h-8 transition-transform duration-500 group-hover:scale-110 ${feature.color}`,
                  })}
                </div>
              </div>

              {/* Content */}
              <div className="relative flex-1">
                <h3 className="text-xl font-semibold text-[#2f2a76] mb-4 group-hover:text-[#f4400d] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>

              {/* Learn more */}
              <div className="relative mt-6">
                <span className="text-[#f4400d] font-medium text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Learn more
                  <span>→</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-20 flex justify-center">
          <Link
            to="/features"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-[#f4400d] text-white font-semibold shadow-lg hover:bg-[#d9360b] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Explore All Features
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;