"use client";
import React, { useState } from "react";

const faqs = [
  { question: "Are your products safe for sensitive skin?", answer: "Yes, our products are dermatologist-tested and designed for all skin types." },
  { question: "Are your products cruelty-free?", answer: "Absolutely! All our products are cruelty-free, vegan, and eco-safe." },
  { question: "What’s your return policy?", answer: "You can return unused products within 30 days of purchase for a full refund." },
  { question: "Do you ship internationally?", answer: "Yes, we offer worldwide shipping." },
  { question: "How do I choose the right product?", answer: "You can take our skin quiz or contact support for personalized recommendations." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#FCFDF6] px-4 py-10 sm:px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 max-w-7xl mx-auto">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2 relative flex justify-center">
          <img
            src="/images/image4.jpg"
            alt="Product"
            className="rounded-xl w-full max-w-md object-cover h-full max-h-[500px]"
          />
          {/* Floating badge */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#EFF5E1] text-[#2D3B36] px-4 py-2 text-sm rounded-full shadow-md flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-600" />
            <span>24/7 We’re Here to Help You</span>
          </div>
        </div>

        {/* Right FAQ Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between h-full">
          {/* Title + Badge */}
          <div className="mb-6">
            <button className="text-sm px-4 py-1 bg-white border border-[#2D3B36] text-[#2D3B36] rounded-full mb-3">
              ● Frequently Asked Question
            </button>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#2D3B36]">
              Answers to Your <br />
              Skincare Questions, All in One Place.
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4 mt-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left px-4 py-3 bg-white hover:bg-gray-50 transition"
                >
                  <span className="text-sm font-medium text-[#2D3B36]">{faq.question}</span>
                  <span className="text-xl text-[#2D3B36] font-bold">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4 text-sm text-gray-600 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
