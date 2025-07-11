import { BsHandbag } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { PiUser } from "react-icons/pi";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#EFF5E1]">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <h1 className="text-lg font-bold text-[#2D3B36]">SKINCARE</h1>

        {/* Nav Links - hide on mobile */}
        <ul className="hidden sm:flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-[#2D3B36]">
          <li className="cursor-pointer">All Products</li>
          <li className="cursor-pointer">Serum</li>
          <li className="cursor-pointer">Sunscreen</li>
          <li className="cursor-pointer">Bundle</li>
        </ul>

        {/* Icons */}
      <div className="flex items-center gap-3 text-[#2D3B36]">
  {/* Shopping Bag */}
  <div className="bg-white rounded-full p-2 shadow cursor-pointer">
    <BsHandbag className="text-xl" />
  </div>

  {/* Cart Count (optional, or move inside bag icon later) */}
  <span className="text-sm hidden sm:inline">Cart(1)</span>

  {/* Heart */}
  <div className="bg-white rounded-full p-2 shadow cursor-pointer">
    <CiHeart className="text-xl" />
  </div>

  {/* User */}
  <div className="bg-white rounded-full p-2 shadow cursor-pointer">
    <PiUser className="text-xl" />
  </div>
</div>

      </div>
    </nav>
  );
}
