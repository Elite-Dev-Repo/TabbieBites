import logo from "../assets/logo.png";
import hero1 from "../assets/hero1.png";
import { ShoppingCart } from "lucide-react";

function Hero() {
  return (
    <section>
      <div className="overflow-hidden">
        <nav className="cont w-full h-[80px] flex items-center justify-around bg-transparent backdrop-blur-sm">
          <a href="/" className="w-[150px]">
            <img src={logo} alt="" />
          </a>

          <ul className="flex gap-5">
            <li className="hover:text-(--color-secondary)">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-(--color-secondary)">
              <a href="#services">Services</a>
            </li>
            <li className="hover:text-(--color-secondary)">
              <a href="/gallery">Gallery</a>
            </li>
            <li className="hover:text-(--color-secondary)">
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <button className="px-5 py-3 border flex gap-2 items-center">
            <ShoppingCart />
            <a href="#contact">Order on WhatsApp</a>
          </button>
        </nav>

        <header>
          <div className="cont flex  h-[calc(100vh-80px)] relative items-center justify-center">
            <div className=" flex-1 min-w-[0] h-full flex flex-col justify-center items-center">
              <h1 className="text-[5em] font-[400] absolute left-1/2 -translate-x-1/2 top-5 ">
                Crafted to Delight, <br /> Served with Love.
              </h1>

              <div className=" absolute bottom-[5em] left-[3em] max-w-[40%] flex flex-col items-start text-start gap-5">
                <p className="text-[.9em] uppercase font-semibold">
                  from fresh ingredients to sensational treats. <br /> We make
                  every effort to ensure that our products are of the highest
                  quality.
                </p>

                <button className="px-5 py-3 w-fit bg-black text-white flex gap-2 items-center">
                  <a href="#contact">Order on WhatsApp</a> <ShoppingCart />
                </button>
              </div>
            </div>

            <div className="flex-1 min-w-[0] flex flex-col h-full">
              <div className="mt-auto max-w-[100%]">
                <img src={hero1} alt="" />
              </div>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}

export default Hero;
