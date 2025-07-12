import React from "react";

export default function HeroBanner() {
  return (
    <section className="bg-[#FCFDF6] px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] rounded-2xl overflow-hidden shadow-lg">
          {/* Background Image */}
          <img
            src="/images/image6.png"
            alt="Skincare Model"
            className="w-full h-full object-cover object-center"
          />

          {/* Gradient Overlay with Text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col items-center justify-end text-center p-6 md:p-10">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
              Feel Beautiful Inside and Out <br className="hidden sm:block" />
              with Every Product.
            </h2>
            <button className="bg-white text-black text-sm px-6 py-2 rounded-full shadow-sm hover:bg-gray-100 transition duration-200">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
