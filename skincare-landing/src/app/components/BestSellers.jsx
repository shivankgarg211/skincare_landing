"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

export default function BestSellingProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size only on client
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  return (
    <div className="bg-[#FCFDF6] py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6 max-w-6xl mx-auto">
        <button className="text-xs border border-[#2D3B36] rounded-full px-4 py-1 text-[#2D3B36]">
          Best Selling Products
        </button>
        <div className="hidden lg:flex gap-2">
          <button
            onClick={prevSlide}
            className="w-8 h-8 rounded-full border flex items-center justify-center text-[#2D3B36]"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={nextSlide}
            className="w-8 h-8 rounded-full bg-[#2D3B36] text-white flex items-center justify-center"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <h2 className="text-center text-2xl sm:text-3xl font-semibold text-[#2D3B36] mb-10">
        Skincare That Brings Out
        <br /> Your Natural Radiance
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product, index) => {
          const isVisible = !isMobile || index === currentIndex;

          return (
            isVisible && (
              <div
                key={product.id}
                className="relative rounded-xl overflow-hidden shadow-lg bg-white"
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
            )
          );
        })}
      </div>

      {/* Mobile arrows */}
      {isMobile && (
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="w-8 h-8 rounded-full border flex items-center justify-center text-[#2D3B36]"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={nextSlide}
            className="w-8 h-8 rounded-full bg-[#2D3B36] text-white flex items-center justify-center"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
