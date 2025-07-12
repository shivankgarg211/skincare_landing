"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Product() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const featuresRef = useRef([]);

  useEffect(() => {
    // Container fade-in
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 5,
      ease: "power2.out",
    });

    // Heading animation
    gsap.from(headingRef.current, {
      opacity: 0,
      x: -30,
      delay: 0.5,
      duration: 1,
      ease: "power3.out",
    });

    // Image zoom-in
    gsap.from(imageRef.current, {
      scale: 0.9,
      opacity: 0,
      delay: 0.6,
      duration: 1,
      ease: "power2.out",
    });

    // Stagger features
    gsap.from(featuresRef.current, {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      delay: 0.8,
      duration: 1,
      ease: "back.out(1.7)",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-inter antialiased" ref={sectionRef}>
      <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
        <section className="text-center mb-12 md:mb-16 lg:mb-20">
          <h1
            ref={headingRef}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-4 text-[#2D3B36]"
          >
            Experience the ultimate in skincare with our expertly formulated
            products, crafted to nourish, protect, and rejuvenate your skin.
            Combining the finest natural ingredients with{" "}
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2D3B36] leading-relaxed max-w-2xl mx-auto opacity-20">
              advanced science, our collection ensures every skin type can
              achieve a radiant, healthy glow. Embrace your beauty with
              confidence every day.
            </span>
          </h1>
        </section>

        <section className="flex flex-col lg:flex-row items-center bg-white rounded-2xl shadow-xl overflow-hidden p-6 md:p-10 lg:p-12">
          <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
            <div className="flex items-center text-green-600 mb-6">
              <span className="w-[260px] h-[60px] flex items-center justify-center text-sm font-medium bg-white text-[#2D3B36] rounded-4xl shadow-sm">
                Why Our Products
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D3B36] leading-tight mb-8">
              YOUR SKIN DESERVES THE BEST CARE.
            </h2>
            <p className="text-[#2D3B36] text-base md:text-lg leading-relaxed mb-10">
              Discover a curated selection of skincare products designed to
              rejuvenate, protect, and pamper your skin. Explore our range
              crafted with love, backed by science, and delivered to you.
            </p>

            <div className="space-y-6">
              {[
                {
                  number: "01",
                  title: "Bio Ingredients",
                  description:
                    "Get naturally beautiful and transform your skin with bio ingredients creams for healthy, radiant skin.",
                },
                {
                  number: "02",
                  title: "Everything Natural",
                  description:
                    "Pure ingredients for your skin. The Perfect solution for your skin care needs.",
                },
                {
                  number: "03",
                  title: "All Handmade",
                  description:
                    "Made with love and care. Just for you. Give your skin the tender loving care it deserves.",
                },
              ].map((item, index) => (
                <FeatureItem
                  key={item.number}
                  number={item.number}
                  title={item.title}
                  description={item.description}
                  refEl={(el) => (featuresRef.current[index] = el)}
                />
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col items-center">
            <div className="relative w-full" ref={imageRef}>
              <img
                src="/images/image2.png"
                alt="Skincare Model"
                className="rounded-2xl w-full h-auto object-cover shadow-lg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x700/D1FAE5/065F46?text=Image+Not+Found";
                }}
              />

              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-3 flex items-center shadow-lg">
                <div className="w-3 h-3 text-[#2D3B36] rounded-full mr-2"></div>
                <span className="text-[#2D3B36] text-sm font-semibold text-center">
                  Best Skin Care Product
                </span>
              </div>
            </div>

            <div className="flex justify-between w-full mt-4 px-1">
              <span className="text-gray-600 text-xs font-medium">SINCE 2001</span>
              <span className="text-[#2D3B36] text-xs font-medium cursor-pointer">
                LEARN MORE
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function FeatureItem({ number, title, description, refEl }) {
  return (
    <div className="flex items-start" ref={refEl}>
      <div className="flex-shrink-0 mr-4">
        <div className="relative">
          <span className="block text-[#2D3B36] text-2xl md:text-3xl font-bold">{number}</span>
          <span className="block text-[#2D3B36] text-2xl md:text-3xl font-bold opacity-20 blur-sm scale-y-[-1] transform origin-top mt-[-6px]">
            {number}
          </span>
        </div>
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-semibold text-[#2D3B36] mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
}

export default Product;
