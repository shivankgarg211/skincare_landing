"use client"
import { useEffect, useRef } from 'react';
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
      className="bg-[#EFF5E1] min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-4"
    >
      {/* Left Description */}
      <div className="absolute top-20 left-22 text-sm w-48 text-left">
        <p>
          Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
        </p>
      </div>
      <div className="absolute top-75 left-[10%]">
  <button className="bg-black text-white px-6 py-2 rounded-full">Shop Now</button>
</div>

      {/* Right Top Product Image */}
     <div className="absolute top-20 right-24">
  <img
    src="/images/plums.jpg"
    alt="Product"
    className="w-20 h-20 object-cover rounded-lg shadow-md"
  />
</div>


      {/* Main Text */}
      <h1 className="text-5xl font-bold leading-tight mt-8">
        GLOW <br /> NATUR- <br /> ALLY
      </h1>

      {/* Image */}
      <div className="mt-6 relative z-10">
        <img src="/images/image1.png" alt="Hero" className="rounded-xl w-[300px]" />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow text-xs">
          While giving you an invigorating cleansing experience.
        </div>
      </div>
      {/* Button */}
     
     

      {/* Background Large Text */}
    
    <h1 className="absolute bottom-[-45px] left-0 w-full text-[18vw] text-[#2D3B36] opacity-100 font-bold z-0 px-8 tracking-normal whitespace-nowrap">
  SKINCARE
</h1>

    </section>
  );
}
