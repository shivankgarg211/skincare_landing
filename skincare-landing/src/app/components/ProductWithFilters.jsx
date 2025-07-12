"use client";

import React, { useState } from "react";

const filters = [
  "NEW ARRIVAL",
  "CLEANSING",
  "ACNE FIGHTER",
  "ANTI AGING",
];

const products = [
  {
    id: 1,
    name: "ALYA SKIN CLEANSER.",
    price: "$29.99",
    image: "/images/image3.jpg",
  },
  {
    id: 2,
    name: "RITUAL OF SAKURA.",
    price: "$34.99",
    image: "/images/image5.jpg",
  },
  {
    id: 3,
    name: "THE BODY LOTION.",
    price: "$19.99",
    image: "/images/image4.jpg",
  },
];

export default function ProductWithFilters() {
  const [activeFilter, setActiveFilter] = useState("NEW ARRIVAL");

  return (
    <section className="bg-[#FCFDF6] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-[#2D3B36] mb-6">
          Feel Beautiful Inside and Out
          <br /> with Every Product.
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm rounded-full border border-[#2D3B36] transition-all duration-200 shadow-sm
                ${
                  activeFilter === filter
                    ? "bg-[#2D3B36] text-white"
                    : "bg-white text-[#2D3B36] hover:bg-[#2D3B36]/10"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative rounded-xl overflow-hidden shadow-md bg-white"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] object-cover"
              />

              {/* Info Box */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-[#FAFAF1] rounded-xl px-4 py-3 flex justify-between items-center shadow-md">
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    FROM {product.price}
                  </p>
                </div>
                <button className="bg-[#E6E8D8] p-2 rounded-xl">
                  {/* Cart Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7H19m-9 0a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
