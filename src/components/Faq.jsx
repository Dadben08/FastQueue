import React from 'react'
import { faqs } from "../constants";

const Faq = () => {
  return (
    <section id="faq">
      <div className="mt-20 tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 font-julius text-[#2f2a76]">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-wrap justify-center">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
              <div className="bg-[#2f2a76] rounded-2xl p-6 border border-neutral-200 shadow-sm hover:shadow-lg transition">
                <h6 className="text-lg font-semibold font-julius text-[#fff] mb-2">
                  {faq.question}
                </h6>
                <p className="text-md font-raleway text-[#fff]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq