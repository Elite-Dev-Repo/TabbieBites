import React from "react";

import tabbie from "../assets/tabbie.jpg";

const About = () => {
  return (
    <section className="">
      <div
        className="cont py-5 flex gap-5 h-full justify-around items-center overflow-hidden"
        id="about"
      >
        <div className="img-cont w-[40%]">
          <img src={tabbie} />
        </div>

        <div className="w-[40%] flex flex-col justify-around items-center p-[1em] h-full">
          <h3 className="font-bold text-[1.5em] text-[var(--color-secondary)]">
            About Tabbi Bites
          </h3>
          <p className="text-[1em] leading-[2em] tracking-wide text-center">
            Tabbie Bakes is a family-run business that specializes in baking
            fresh, delicious, and healthy cakes and pastries. <br /> We use only
            the finest ingredients and traditional baking techniques to create
            our signature products, which are available in a variety of flavors
            and styles. Whether you're looking for a special treat for yourself
            or a gift for someone you love, Tabbie Bakes has something for
            everyone. <br /> Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Quidem quia quas ad. Omnis iusto molestias reiciendis
            voluptatem numquam esse non. <br /> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Autem cumque totam labore cupiditate
            soluta. Repellendus ipsam harum, ut distinctio pariatur dolor
            consequuntur amet magni voluptates?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
