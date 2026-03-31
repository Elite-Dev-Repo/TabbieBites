import React, { useState } from "react";
import { ShoppingCart, Menu, X, ChefHat } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Our Story", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <>
      <nav className="sticky top-5 z-50 mx-auto flex h-18 w-[90%] items-center justify-between rounded-full bg-white/80 px-6 shadow-md backdrop-blur-md transition-all duration-300 sm:w-[90%] lg:px-10">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <ChefHat size={32} className="text-[#c31644]" strokeWidth={2.5} />
            <span className=" font-bold text-xl tracking-tight text-gray-800 block">
              Tabbie<span className="text-[#c31644]">Bakes</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex gap-8 font-medium text-gray-600">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="transition-colors duration-200 text-sm hover:text-[#c31644]"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => navigate("/shop")}
            className="flex items-center gap-2 rounded-full bg-[#c31644] px-6 py-2.5 font-semibold text-white transition-all hover:bg-[#a11238] hover:shadow-lg active:scale-95"
          >
            <ShoppingCart size={18} />
            <span>Shop</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="rounded-full p-2 transition-colors hover:bg-gray-100 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile menu dropdown */}
        <div
          className={`absolute left-0 top-[90px] w-full origin-top transform rounded-3xl bg-white p-6 shadow-xl transition-all duration-300 lg:hidden ${
            isMenuOpen
              ? "scale-y-100 opacity-100"
              : "pointer-events-none scale-y-95 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-[#c31644]"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => {
                  navigate("/shop");
                  setIsMenuOpen(false);
                }}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#c31644] py-4 font-bold text-white shadow-md active:scale-[0.98]"
              >
                <ShoppingCart size={20} />
                Shop Now
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
