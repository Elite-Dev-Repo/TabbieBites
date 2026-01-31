import React, { useState } from "react";
import logo from "../assets/logo.png";
import { ShoppingCart, Menu, X } from "lucide-react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="cont w-full h-[80px] flex items-center justify-between lg:justify-around bg-transparent backdrop-blur-sm  z-50 sticky top-0 border-b border-b-[#111]/60">
        <a href="/" className="w-[100px] sm:w-[120px] lg:w-[150px]">
          <img src={logo} alt="" className="w-full" />
        </a>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <ul className="hidden lg:flex gap-5">
          <li className="hover:text-(--color-secondary)">
            <a href="#about">Our Story</a>
          </li>
          <li className="hover:text-(--color-secondary)">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-(--color-secondary)">
            <a href="/gallery">Gallery</a>
          </li>
          <li className="hover:text-(--color-secondary)">
            <a href="pricing">Pricing</a>
          </li>
        </ul>

        <button className="hidden lg:flex px-5 py-3 border gap-2 items-center">
          <ShoppingCart />
          <a href="https://wa.me/c/2348078391732" target="_blank">
            Order on WhatsApp
          </a>
        </button>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-[80px] left-0 w-full bg-[var(--color-primary)] lg:hidden shadow-lg">
            <ul className="flex flex-col gap-4 p-5">
              <li className="hover:text-(--color-secondary)">
                <a href="#about" onClick={() => setIsMenuOpen(false)}>
                  Our Story
                </a>
              </li>
              <li className="hover:text-(--color-secondary)">
                <a href="#services" onClick={() => setIsMenuOpen(false)}>
                  Services
                </a>
              </li>
              <li className="hover:text-(--color-secondary)">
                <a href="/gallery" onClick={() => setIsMenuOpen(false)}>
                  Gallery
                </a>
              </li>
              <li className="hover:text-(--color-secondary)">
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </a>
              </li>
              <li className="hover:text-(--color-secondary)">
                <a href="/pricing" onClick={() => setIsMenuOpen(false)}>
                  Pricing
                </a>
              </li>
              <li>
                <button className="w-full px-5 py-3 border flex gap-2 items-center justify-center">
                  <ShoppingCart />
                  <a href="#contact">Order on WhatsApp</a>
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
