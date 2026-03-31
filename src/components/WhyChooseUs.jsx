import React from "react";
import { Award, Clock, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Sparkles strokeWidth={1.5} />,
      title: "Fresh Ingredients",
      desc: "We use only the finest, freshest ingredients sourced locally for every creation.",

      number: "01",
    },
    {
      icon: <Heart strokeWidth={1.5} />,
      title: "Made to Order",
      desc: "Every item is crafted specifically for you with love, care, and attention to detail.",

      number: "02",
    },
    {
      icon: <Award strokeWidth={1.5} />,
      title: "Creative Designs",
      desc: "Custom designs tailored to match your unique vision and exceed expectations.",
    
      number: "03",
    },
    {
      icon: <Clock strokeWidth={1.5} />,
      title: "Timely Delivery",
      desc: "Always on time for your special occasion—that is our professional guarantee.",
  
      number: "04",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-24  text-[#000] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section: Left Aligned Editorial Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-white/10 pb-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight">
              Why Choose <span className="italic">TabbieBakes.</span>
            </h2>
          </div>
          <p className="text-[#000] max-w-xs text-sm leading-relaxed uppercase tracking-widest">
            Elevating the culinary experience through obsessive detail.
          </p>
        </div>

        {/* Features Grid: Minimalist Bento */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {features.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative p-10 border-l border-b md:border-b-0 border-white/10 hover:bg-white/[0.02] bg-[var(--color-secondary)] transition-colors duration-500"
            >
              {/* Corner Number Decor */}
              <span className="absolute top-6 right-8 text-xs font-mono text-white/40 group-hover:text-[var(--color-secondary)] transition-colors">
                {item.number}
              </span>

              <div className="mb-8 absolute text-[var(--color-primary)] -top-10 left-1/2 -translate-x-1/2 bg-[var(--color-secondary)] p-3 rounded-full border-3 border-(--color-primary) transition-transform duration-500 group-hover:scale-110">
                {React.cloneElement(item.icon, { size: 36 })}
              </div>

              <h4 className="text-lg font-medium tracking-[0.15em] group-hover:text-[#000] text-(--color-primary) mb-4 group-hover:translate-x-2 transition-transform duration-300">
                {item.title}
              </h4>

              <p className="text-gray-300 text-sm leading-loose font-light group-hover:text-[#000] transition-colors">
                {item.desc}
              </p>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[var(--color-secondary)] transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
