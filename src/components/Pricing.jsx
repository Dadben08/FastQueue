import React from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import { useLocation } from "react-router-dom";

const Pricing = ({ billing = "monthly" }) => {
  const location = useLocation();

  const getPrice = (option) => {
    switch (option.title) {
      case "Standard":
        return billing === "yearly" ? "₦100,000" : "₦10,000";

      case "Pro":
        return billing === "yearly" ? "₦250,000" : "₦25,000";

      default:
        return option.price;
    }
  };

  return (
    <section id="pricing" className="mt-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide text-[#2F2A76] font-bold">
        Pricing
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {pricingOptions.map((option, index) => (
          <div key={index}>
            <div className="relative h-full p-6 sm:p-8 bg-white rounded-3xl shadow-lg border border-gray-200 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              {option.title === "Pro" && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2F2A76] text-white text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="flex flex-col justify-between h-full w-full">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#2F2A76] mb-2">
                    {option.title}
                  </h3>

                  <div className="mb-6">
                    <p className="text-4xl sm:text-5xl font-bold text-gray-800 transition-all duration-300">
                      {getPrice(option)}
                    </p>

                    {option.title !== "Free" &&
                      option.title !== "Enterprise" && (
                        <div className="mt-2">
                          <span className="text-base sm:text-lg text-gray-400">
                            /{billing === "yearly" ? "year" : "month"}
                          </span>

                          {billing === "yearly" && (
                            <p className="text-sm text-green-600 font-medium mt-1">
                              Save 2 months
                            </p>
                          )}
                        </div>
                      )}
                  </div>

                  <ul className="space-y-4 text-left">
                    {option.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-700 text-sm sm:text-base"
                      >
                        <CheckCircle2
                          size={20}
                          className="mr-2 mt-1 text-[#F4400D] flex-shrink-0"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="relative overflow-hidden w-full mt-10 py-3 sm:py-4 px-6 text-base sm:text-lg font-semibold rounded-full border-2 bg-white text-[#2F2A76] transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                  <span className="absolute inset-0 bg-[#F4400D] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>

                  <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                    {option.title === "Free" && "Start for Free"}
                    {option.title === "Standard" && "Get Standard"}
                    {option.title === "Pro" && "Get Pro"}
                    {option.title === "Enterprise" && "Contact Sales"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {location.pathname !== "/pricing" && (
        <div className="mt-12 flex justify-center">
          <a
            href="/pricing"
            className="px-8 sm:px-10 py-3 sm:py-4 bg-[#F4400D] text-white rounded-full font-semibold shadow-md border border-transparent hover:bg-transparent hover:text-[#F4400D] hover:border-[#F4400D] transition-all duration-300"
          >
            View More
          </a>
        </div>
      )}
    </section>
  );
};

export default Pricing;
