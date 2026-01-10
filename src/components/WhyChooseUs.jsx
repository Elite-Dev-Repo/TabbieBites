import React from "react";
import { Award, Clock, Heart, Sparkles } from "lucide-react";
import breadbg from "../assets/breadbg.png";

function WhyChooseUs() {
  const features = [
    {
      icon: <Sparkles size={32} />,
      title: "Fresh Ingredients",
      description:
        "We use only the finest, freshest ingredients sourced locally",
    },
    {
      icon: <Heart size={32} />,
      title: "Made to Order",
      description:
        "Every item is crafted specifically for you with love and care",
    },
    {
      icon: <Award size={32} />,
      title: "Creative Designs",
      description:
        "Custom designs to match your vision and exceed expectations",
    },
    {
      icon: <Clock size={32} />,
      title: "Timely Delivery",
      description: "Always on time for your special occasion, guaranteed",
    },
  ];

  return (
    <section className="bg-[#fff] whychoose">
      <div className="cont w-full h-screen flex justify-around items-center flex-col">
        <h2 className="text-2xl font-semibold border-solid border px-7 py-3 rounded-full">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-4 gap-5 mt-5">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col gap-2 items-center border p-5 bg-transparent backdrop-blur-2xl"
            >
              <div className="text-(--color-secondary)">{feature.icon}</div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
