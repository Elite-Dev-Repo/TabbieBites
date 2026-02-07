import React from "react";
import { Cake, Utensils, Briefcase, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Custom Cakes & Desserts",
      icon: <Cake className="w-8 h-8 text-(--color-secondary)" />,
      description:
        "The centerpiece of any celebration. We specialize in bespoke designs that taste even better than they look.",
      items: [
        "Signature Celebration Cakes",
        "Cupcakes & Minis",
        "Seasonal Pastry Boxes",
        "Dietary-Friendly Options",
      ],
    },
    {
      title: "Private Event Catering",
      icon: <Utensils className="w-8 h-8 text-(--color-secondary)" />,
      description:
        "Host your guests without the stress of the kitchen. We provide full-service catering for intimate gatherings.",
      items: [
        "Multi-course Intimate Dinners",
        "Savory Hors d'oeuvres",
        "Gourmet Brunch Spreads",
      ],
    },
    {
      title: "Corporate & Gifting",
      icon: <Briefcase className="w-8 h-8 text-(--color-secondary)" />,
      description:
        "Elevate your professional relationships with handcrafted treats better than any standard gift basket.",
      items: [
        "Client Appreciation Boxes",
        "Team Meeting Platters",
        "Holiday Gift Sets",
      ],
    },
  ];

  return (
    <section className="page-section max-w-6xl mx-auto px-4 py-12 sm:py-16 font-sans text-gray-800">
      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl font-semibold  px-5 sm:px-7 py-3 rounded-full w-fit mx-auto mb-5"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4"
        >
          From intimate morning coffees to life's biggest celebrations, we bring
          the warmth of a professional kitchen directly to your table.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20"
        id="services"
      >
        {services.map((service, index) => (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            key={index}
            className="p-6 sm:p-8 border border-gray-100 rounded-2xl bg-stone-50 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg sm:text-xl font-bold mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              {service.description}
            </p>
            <ul className="space-y-2">
              {service.items.map((item, i) => (
                <li key={i} className="flex items-center text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 bg-(--color-secondary) rounded-full mr-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Process Table Section */}
      <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-20">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <CalendarCheck className="text-gray-900 w-6 h-6 sm:w-8 sm:h-8" />
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            How It Works
          </h2>
        </div>
        <div className="overflow-x-auto -mx-6 sm:mx-0 px-6 sm:px-0">
          <table className="w-full text-left min-w-[500px] sm:min-w-0">
            <thead>
              <tr className="border-b border-stone-200">
                <th className="pb-4 font-semibold text-xs sm:text-sm uppercase tracking-wider text-gray-500">
                  Step
                </th>
                <th className="pb-4 font-semibold text-xs sm:text-sm uppercase tracking-wider text-gray-500">
                  Action
                </th>
                <th className="pb-4 font-semibold text-xs sm:text-sm uppercase tracking-wider text-gray-500">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              <tr>
                <td className="py-4 font-bold text-(--color-secondary)">01</td>
                <td className="py-4 font-semibold text-sm sm:text-base">
                  Inquiry
                </td>
                <td className="py-4 text-gray-600 text-sm sm:text-base">
                  Fill out our form with your date, guest count, and vision.
                </td>
              </tr>
              <tr>
                <td className="py-4 font-bold text-(--color-secondary)">02</td>
                <td className="py-4 font-semibold text-sm sm:text-base">
                  Consultation
                </td>
                <td className="py-4 text-gray-600 text-sm sm:text-base">
                  We'll discuss flavors, themes, and any dietary needs.
                </td>
              </tr>
              <tr>
                <td className="py-4 font-bold text-(--color-secondary)">03</td>
                <td className="py-4 font-semibold text-sm sm:text-base">
                  Proposal
                </td>
                <td className="py-4 text-gray-600 text-sm sm:text-base">
                  Receive a custom menu and pricing for approval.
                </td>
              </tr>
              <tr>
                <td className="py-4 font-bold text-(--color-secondary)">04</td>
                <td className="py-4 font-semibold text-sm sm:text-base">
                  Delivery
                </td>
                <td className="py-4 text-gray-600 text-sm sm:text-base">
                  We deliver and set up so you can focus on your guests.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Quality Note & CTA */}
      <div className="text-center bg-black rounded-2xl p-8 sm:p-10">
        <p className="italic text-[#ffffff98] mb-6 text-base sm:text-lg px-4">
          "We believe the best flavor comes from real butter, local eggs, and a
          lot of patience."
        </p>
        <h3 className="text-xl sm:text-2xl text-white font-bold mb-6 sm:mb-8 px-4">
          Ready to make your next event delicious?
        </h3>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://wa.me/c/2348078391732" target="_blank">
            <button className="bg-white px-8 py-3 rounded-sm font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto">
              Get in touch
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
