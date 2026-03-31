import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-[#c31644]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 w-full min-h-screen">
        <div className="flex flex-col lg:flex-row items-center gap-12 pt-10 lg:pt-20 min-h-screen w-full">
          {/* Left Content Side */}
          <div className="flex-1 text-center relative lg:text-left z-10 flex flex-col items-center lg:items-start justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-8xl lg:w-220 font-bold text-gray-900 leading-[1.1] tracking-tighter lg:absolute  lg:-top-50">
                Crafted to Delight, <br />
                Served with{" "}
                <span className="relative inline-block py-2">
                  <span className="px-5 py-1 bg-[var(--color-secondary)] text-white rounded-lg inline-block -rotate-6 lg:-rotate-12 whitespace-nowrap">
                    Love.
                  </span>
                </span>
              </h1>

              <p className="max-w-xl text-lg text-gray-600 leading-relaxed mx-auto mt-6 lg:mt-12 lg:mx-0">
                From fresh, locally sourced ingredients to sensational treats.
                We obsess over every detail to ensure your products are of the
                highest culinary quality.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="https://wa.me/c/2348078391732"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 bg-[#c31644] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-[#c31644]/30 hover:bg-[#a11238] transition-all active:scale-95"
                >
                  View Catalog
                  <ShoppingCart
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Image Collage Side - Hidden on Mobile per your original logic */}
          <div className="flex-1 relative w-full hidden lg:block h-[600px]">
            {/* Main Center Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] z-20"
            >
              <img
                src={hero1}
                alt="Signature Dish"
                className="w-full h-auto drop-shadow-2xl hover:rotate-3 transition-transform duration-500"
              />
            </motion.div>

            {/* Floating Top Right */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 top-0 w-[250px] z-10"
            >
              <img
                src={hero2}
                alt="Treat 1"
                className="w-full h-auto drop-shadow-xl"
              />
            </motion.div>

            {/* Floating Bottom Left */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute right-0 bottom-20 w-[250px] z-30"
            >
              <img
                src={hero3}
                alt="Treat 2"
                className="w-full h-auto drop-shadow-xl"
              />
            </motion.div>

            {/* Abstract Shape Decor */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] h-[300px] border-2 border-dashed border-gray-100 rounded-full animate-spin-slow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
