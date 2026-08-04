// HowItWorks.jsx
import { CheckCircle2 } from "lucide-react";
import { howItWorksItems } from "../constants";

const HowItWorks = () => {
  return (
    <section
      id="howitworks"
      className="mt-20 bg-[#ffffff] py-16 rounded-2xl px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide font-julius text-[#2f2a76]">
        How FastQueues Works
      </h2>

      <div className="pt-12 max-w-3xl mx-auto">
        {howItWorksItems.map((item, index) => (
          <div key={index} className="flex items-start mb-10">
            {/* Responsive Icon */}
            <div
              className="
                flex-shrink-0
                mr-4
                w-10 h-10
                sm:w-12 sm:h-12
                lg:w-14 lg:h-14
                bg-[#f4400d]
                rounded-full
                flex
                items-center
                justify-center
                shadow-md
              "
            >
              <CheckCircle2
                className="
                  w-5 h-5
                  sm:w-6 sm:h-6
                  lg:w-7 lg:h-7
                  text-white
                "
              />
            </div>

            {/* Content */}
            <div>
              <h5 className="mb-2 text-xl sm:text-2xl font-semibold font-julius text-[#2f2a76]">
                {item.title}
              </h5>

              <p className="text-sm sm:text-base lg:text-lg font-raleway text-[#2f2a76]/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;