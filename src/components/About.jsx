import tabbie from "../assets/image25.jpg";
import VanillaTilt from "vanilla-tilt";

import { useEffect, useRef } from "react";

export default function About() {
  const tiltRef = useRef(null);

  useEffect(() => {
    const el = tiltRef.current;
    if (!el) return;
    VanillaTilt.init(el, { glare: true });
    return () => el.vanillaTilt?.destroy();
  }, []);

  return (
    <section
      className="w-full min-h-screen flex flex-col min-md:flex-row items-center justify-center bg-[#eee8e3] text-[#211b1b] min-[760px]:grid-cols-2"
      id="about"
      aria-labelledby="story-title"
    >
      <div
        ref={tiltRef}
        className="flex items-center max-w-[90vw] justify-center max-h-[500px] overflow-hidden w-140 data-tilt border-5 border-primary outline-4"
        style={{ borderRadius: "50% 50% 0px 50%" }}
        data-tilt
      >
        <img
          src={tabbie}
          alt="Tabbie, founder of Tabbie Bakes"
          className="block h-full w-full object-cover object-[center_35%]"
        />
      </div>
      <div className="max-w-[650px]  self-center p-[clamp(3rem,8vw,8rem)] max-[760px]:px-6 max-[760px]:py-14">
        <h2
          id="story-title"
          className="mb-[1.7rem] mt-[0.9rem] text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.055em]"
        >
          Made with care.
          <br />
          <span className="text-[#a92d4b]">Shared with joy.</span>
        </h2>
        <p className="max-w-[510px] text-base leading-[1.85] text-[#5f5754]">
          Tabbie Bakes is a family-run kitchen built around a simple idea: the
          best moments are better when there is something lovely to share.
        </p>
        <p className="max-w-[510px] text-base leading-[1.85] text-[#5f5754]">
          We make fresh cakes and pastries with care, combining familiar,
          comforting flavours with a personal touch. From a quiet treat to a
          table full of guests, every order gets the same attention.
        </p>
        <div className="mt-8 flex items-center gap-3 text-[0.82rem] text-[#a92d4b]">
          <span className="block h-px w-[34px] bg-[#a92d4b]" />{" "}
          <span>From our kitchen, with love.</span>
        </div>
      </div>
    </section>
  );
}
