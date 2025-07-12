"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const container = useRef();

  useEffect(() => {
    gsap.from(container.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      delay: 0.5,
    });
  }, []);

  return (
    <section
      ref={container}
      className="bg-[#EFF5E1] min-h-screen relative overflow-hidden px-4"
    >
      {/* ----------- Desktop View ----------- */}
      <div className="hidden lg:flex flex-col items-center justify-center text-center min-h-screen relative">
        {/* Left Description */}
        <div className="absolute top-20 left-22 text-sm w-48 text-left">
          <p>
            Transform your skincare routine with premium products that restore,
            protect, and enhance your natural glow every day.
          </p>
        </div>

        {/* Button */}
        <div className="absolute top-75 left-[10%]">
          <button className="bg-[#2D3B36] text-white px-6 py-2 rounded-full">
            Shop Now
          </button>
        </div>

        {/* Right Top Product Image */}
        <div className="absolute top-20 right-22">
          <img
            src="/images/plums.jpg"
            alt="Product"
            className="w-20 h-20 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl font-bold leading-tight mt-8">
          GLOW <br /> NATURALLY
        </h1>

        {/* Center Image */}
        <div className="mt-6 relative z-10">
          <img
            src="/images/image1.png"
            alt="Hero"
            className="rounded-xl w-[300px] mx-auto"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#EDF4E0] px-4 py-2 rounded-full shadow flex items-center gap-2 text-xs">
            {/* Product Image with dotted border */}
            <div className="w-35 h-8 rounded-full border border-dashed border-gray-400 flex items-center justify-center overflow-hidden">
              <img
                src="/images/plums.jpg"
                alt="Product"
                className="w-6 h-6 object-contain"
              />
            </div>

            {/* Text - don’t touch this as requested */}
            <span className="text-[#2D3B36]">
              While giving you an invigorating cleansing experience.
            </span>
          </div>
        </div>

        {/* Background Large Text */}
        <h1 className="absolute bottom-[-45px] left-0 w-full text-[18vw] text-[#2D3B36] opacity-100 font-bold z-0 px-8 tracking-normal whitespace-nowrap">
          SKINCARE
        </h1>
      </div>

      {/* ----------- Mobile View ----------- */}
      <div className="flex lg:hidden flex-col items-center justify-center text-center min-h-screen gap-6 pt-12 relative z-10">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold leading-tight">
          GLOWWWV <br /> NATURALLY
        </h1>

        {/* Description */}
        <div className="text-sm text-[#2D3B36] px-6 text-center max-w-xs">
          Transform your skincare routine with premium products that restore,
          protect, and enhance your natural glow every day.
        </div>

        {/* Center Image */}
        <div className="relative z-10">
          <img
            src="/images/image1.png"
            alt="Hero"
            className="rounded-xl w-[250px] sm:w-[300px] mx-auto"
          />
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow text-xs">
            While giving you an invigorating cleansing experience.
          </div>
        </div>

        {/* Background Text */}
        <h1 className="text-[18vw] text-[#2D3B36] opacity-100 font-bold tracking-tight">
          SKINCARE
        </h1>

        {/* Product Image */}
        <div>
          <img
            src="/images/plums.jpg"
            alt="Product"
            className="w-80 h-80 object-cover rounded-lg shadow-md mx-auto"
          />
        </div>

        {/* Button */}
        <button className="bg-[#2D3B36] text-white px-6 py-2 rounded-full mt-2">
          Shop Now
        </button>
      </div>
    </section>
  );
}
