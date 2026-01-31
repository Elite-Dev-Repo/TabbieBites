import hero1 from "../assets/hero1.png";
import { ShoppingCart } from "lucide-react";
import Nav from "./Nav";

function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="overflow-hidden">
        <Nav />

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
