import React from "react";
import { motion as Motion } from "framer-motion";
import Nav from "./Nav";
import hero1 from "../assets/image24.jpg";
import hero2 from "../assets/image2.jpg";
import hero3 from "../assets/image3.jpg";
import hero4 from "../assets/image19.jpg";
import hero5 from "../assets/image20.jpg";
import cake from "../assets/cake.png";
import rose from "../assets/rose.png";
import flower from "../assets/flower.png";

const heroImages = [
  { src: hero1, alt: "Cheesecake slice", rotate: -12 },
  { src: hero2, alt: "Stack of pancakes", rotate: -6 },
  { src: hero3, alt: "Celebration cake", rotate: 0 },
  { src: hero4, alt: "50th birthday cake", rotate: 6 },
  { src: hero5, alt: "Love You bento cake", rotate: 12 },
];

function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:z-0 before:[background-image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] before:[background-size:50px_50px] before:[mask-image:linear-gradient(to_bottom,rgb(250,250,250)_50%,transparent_100%)] before:[-webkit-mask-image:linear-gradient(to_bottom,rgb(250,250,250)_50%,transparent_100%)]">
      <Nav />
      <div className="mx-auto cont px-6 lg:px-10 w-full min-h-screen relative">
        <div className="absolute max-sm:hidden left-10 top-40 w-30 h-30">
          <img src={cake} alt="" className="w-full h-full" />
        </div>
        <div className="absolute max-sm:-bottom-10 left-80 top-95 w-20 h-20">
          <img src={flower} alt="" className="w-full h-full" />
        </div>
        <div className="absolute max-sm:right-7 max-sm:top-55 right-10 top-40 w-30 h-30">
          <img src={rose} alt="" className="w-full h-full" />
        </div>
        <div className="w-full flex flex-col items-center gap-12 pt-10 min-h-screen">
          <div className="w-full h-full flex-1 text-center relative z-10">
            <Motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full flex flex-col items-center justify-center"
            >
              <div className="w-fit relative px-15 py-9 border border-dashed border-tertiary/60">
                <div className="absolute w-3 h-3 bg-tertiary -top-1.5 -left-1.5"></div>
                <div className="absolute w-3 h-3 bg-tertiary -top-1.5 -right-1.5"></div>
                <div className="absolute w-3 h-3 bg-tertiary -bottom-1.5 -left-1.5"></div>
                <div className="absolute w-3 h-3 bg-tertiary -bottom-1.5 -right-1.5"></div>
                <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold text-tertiary leading-normal tracking-tight ">
                  Crafted to Delight, <br />
                  Served with{" "}
                  <span className="relative inline-block py-2">Love.</span>{" "}
                </h1>
              </div>

              <p className="max-w-xl text-lg text-gray-600 leading-relaxed mx-auto mt-6 lg:mt-12 lg:mx-0">
                From fresh, locally sourced ingredients to sensational treats.
                We obsess over every detail to ensure your products are of the
                highest culinary quality.
              </p>

              {/* Fanned Arc Image Stack */}
              <div className="mt-14 sm:mt-18 pb-12 flex gap-5 items-center justify-center -mb-12 sm:-mb-20">
                {heroImages.map((image, i) => {
                  // Calculate a parabolic curve: center items sit higher (y is more negative), outer items sit lower
                  // i goes from 0 to 4. Center is i = 2.
                  const distanceFromCenter = Math.abs(2 - i); // 2, 1, 0, 1, 2
                  const yOffset = distanceFromCenter * distanceFromCenter * 14; // Creates a smooth arch shape

                  return (
                    <Motion.div
                      key={image.alt}
                      initial={{
                        opacity: 0,
                        y: yOffset + 60,
                        rotate: image.rotate,
                      }}
                      animate={{ opacity: 1, y: yOffset, rotate: image.rotate }}
                      transition={{
                        duration: 0.8,
                        delay: 0.4 + i * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{ zIndex: 10 + (2 - distanceFromCenter) }}
                      className={`relative h-36 w-24 overflow-hidden rounded-2xl shadow-xl hover:scale-120 border-4 border-primary transition-transform duration-300 sm:h-52 sm:w-36 md:h-90 md:w-65 ${
                        i !== 0 ? "-ml-6 sm:-ml-10" : ""
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover"
                      />
                    </Motion.div>
                  );
                })}
              </div>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
