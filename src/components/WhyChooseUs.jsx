import React from "react";
import { Award, Clock, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function WhyChooseUs() {
  const features = [
    {
      icon: <Sparkles size={32} />,
      title: "Fresh Ingredients",
      desc: "We use only the finest, freshest ingredients sourced locally",
    },
    {
      icon: <Heart size={32} />,
      title: "Made to Order",
      desc: "Every item is crafted specifically for you with love and care",
    },
    {
      icon: <Award size={32} />,
      title: "Creative Designs",
      desc: "Custom designs to match your vision and exceed expectations",
    },
    {
      icon: <Clock size={32} />,
      title: "Timely Delivery",
      desc: "Always on time for your special occasion, guaranteed",
    },
  ];

  return (
    <section className="page-section py-16 md:py-24 bg-mine">
      <div className="cont">
        <h3 className="relative und text-2xl font-medium mb-12">
          Why Choose Us
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {features.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              key={i}
              className="flex flex-col gap-4 items-start"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-foreground text-primary rounded-full">
                {item.icon}
              </div>
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
