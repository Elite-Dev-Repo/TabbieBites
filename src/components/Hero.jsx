import logo from "../assets/logo.png";
import hero1 from "../assets/hero1.png";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="overflow-hidden">
      <div className="overflow-hidden">
        <nav className="cont w-full h-[80px] flex items-center justify-between lg:justify-around bg-transparent backdrop-blur-sm relative z-50">
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

        <header>
          <div className="cont flex flex-col lg:flex-row h-[calc(100vh-80px)] relative items-center justify-center">
            <h1 className="ml-[.7em] text-[2em] sm:text-[3em] md:text-[4em] lg:text-[5em] font-[400] text-center lg:text-left lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-5 px-4 lg:w-[100%]">
              Crafted to Delight, <br /> Served with Love.
            </h1>
            <div className="flex-1 min-w-[0] w-full h-full flex flex-col justify-center items-center relative">
              <div className="relative lg:absolute lg:bottom-[5em] lg:left-[3em] max-w-[90%] lg:max-w-[60%] flex flex-col items-center lg:items-start text-center lg:text-start gap-5 mt-8 lg:mt-0">
                <p className="flex-1 w-full text-[.8em] sm:text-[.9em] uppercase font-semibold">
                  from fresh ingredients to sensational treats. <br /> We make
                  every effort to ensure that our products are of the highest
                  quality.
                </p>

                <button className="px-5 py-3 w-fit bg-black text-white flex gap-2 items-center">
                  <a href="https://wa.me/c/2348078391732" target="_blank">
                    View Catalogue
                  </a>{" "}
                  <ShoppingCart />
                </button>
              </div>
            </div>

            <div className="flex-1 min-w-[0] flex flex-col h-full w-full mt-8 lg:mt-0 min-sm:hidden min-lg:flex">
              <div className="mt-auto max-w-[100%]">
                <img
                  src={hero1}
                  alt=""
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}

export default Hero;
