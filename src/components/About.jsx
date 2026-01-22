import React from "react";

import tabbie from "../assets/tabbie.jpg";

const About = () => {
  return (
    <section className="overflow-hidden">
      <div
        className="cont py-8 sm:py-12 lg:py-5 flex flex-col lg:flex-row gap-8 lg:gap-5 min-h-screen justify-center items-center overflow-hidden"
        id="about"
      >
        <div className="w-full lg:w-[40%] h-[50vh] sm:h-[60vh] lg:h-[80vh]">
          <img
            src={tabbie}
            className="w-full h-full object-cover object-center rounded-lg lg:rounded-none"
          />
        </div>

        <div className="w-full lg:w-[40%] flex flex-col justify-around items-center p-4 sm:p-6 lg:p-[1em] h-full">
          <h3 className="font-bold text-2xl sm:text-3xl lg:text-[1.5em] text-[var(--color-secondary)] mb-4 lg:mb-0">
            Our Story
          </h3>
          <p className="text-sm sm:text-base lg:text-[1em] leading-relaxed sm:leading-[1.8em] lg:leading-[2em] tracking-wide text-center">
            At Tabbie Bakes, baking isn’t just a business—it’s our family’s love
            language. As a family-run bakery, we believe that the best memories
            are made around the table, which is why we pour our hearts into
            crafting fresh, wholesome cakes and pastries that taste like home.{" "}
            <br className="hidden sm:block" /> We refuse to take shortcuts. By
            marrying time-honored traditional techniques with the finest
            locally-sourced ingredients, we ensure every bite is a perfect
            balance of rich flavor and mindful nutrition.{" "}
            <br className="hidden sm:block" /> From our kitchen to your
            doorstep, our signature collection offers a vibrant spectrum of
            flavors designed to satisfy every palate. Whether you are indulging
            in a quiet moment of self-care or searching for a hand-crafted gift
            to brighten someone’s day, you’ll find something truly special at
            Tabbie Bakes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
