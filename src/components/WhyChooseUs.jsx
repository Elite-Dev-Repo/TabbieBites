import React from "react";
import { Award, Clock, Heart, Sparkles } from "lucide-react";

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
    <section className="bg-[#fff]">
      <div className="cont w-full h-screen flex justify-around items-center flex-col">
        <h2>Why Choose Us</h2>
        <div className="grid grid-cols-4 gap-5 mt-5">
          {features.map((feature, index) => (
            <div key={index}>
              <div>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
