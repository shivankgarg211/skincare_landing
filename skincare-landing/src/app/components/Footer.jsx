import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1F3431] text-white px-6 sm:px-10 lg:px-20 pt-20 pb-32 relative overflow-hidden">
      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-medium leading-snug">
            Join The Skincare <br /> Community Now.
          </h2>
          <div className="flex space-x-8 text-sm text-gray-300">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">YouTube</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between items-start md:items-end space-y-6">
          <div className="text-right">
            <p className="text-sm text-gray-400">Get in Touch</p>
            <p className="text-lg font-semibold">contact.skincare.com</p>
          </div>
          <div className="flex flex-wrap justify-end gap-6 text-sm text-gray-300">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Cookie Policy</a>
          </div>
        </div>
      </div>

      {/* ✅ Faded Background Text fixed to bottom */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center z-0">
        <h1 className="text-[18vw] text-[#FCFDF6] opacity-5 font-bold tracking-tight whitespace-nowrap select-none leading-none">
          SKINCARE
        </h1>
      </div>

      {/* ✅ Created by name in right bottom corner */}
      <div className="absolute bottom-2 right-4 text-[10px] sm:text-xs text-gray-400 z-10 text-right">
        © {new Date().getFullYear()} Created by Shivank Garg
      </div>
    </footer>
  );
}
