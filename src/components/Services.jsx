import React from "react";
import { Cake, Utensils, Briefcase, CalendarCheck } from "lucide-react";

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
        "Elegant Hors d'oeuvres",
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
    <section className="max-w-6xl mx-auto px-4 py-16 font-sans text-gray-800">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-2xl font-semibold border-solid border px-7 py-3 rounded-full w-fit mx-auto mb-5">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          From intimate morning coffees to life’s biggest celebrations, we bring
          the warmth of a professional kitchen directly to your table.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-20" id="services">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-8 border border-gray-100 rounded-2xl bg-stone-50 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              {service.description}
            </p>
            <ul className="space-y-2">
              {service.items.map((item, i) => (
                <li key={i} className="flex items-center text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 bg-(--color-secondary) rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Process Table Section */}
      <div className="bg-stone-50 rounded-3xl p-8 md:p-12 mb-20">
        <div className="flex items-center gap-3 mb-8">
          <CalendarCheck className="text-gray-900" />
          <h2 className="text-3xl font-serif font-bold">How It Works</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-stone-200">
                <th className="pb-4 font-semibold text-sm uppercase tracking-wider text-gray-500">
                  Step
                </th>
                <th className="pb-4 font-semibold text-sm uppercase tracking-wider text-gray-500">
                  Action
                </th>
                <th className="pb-4 font-semibold text-sm uppercase tracking-wider text-gray-500">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              <tr>
                <td className="py-4 font-bold text-(--color-secondary)">01</td>
                <td className="py-4 font-semibold">Inquiry</td>
                <td className="py-4 text-gray-600">
                  Fill out our form with your date, guest count, and vision.
                </td>
              </tr>
              <tr>
                <td className="py-4 font-bold text-(--color-secondary)">02</td>
                <td className="py-4 font-semibold">Consultation</td>
                <td className="py-4 text-gray-600">
                  We’ll discuss flavors, themes, and any dietary needs.
                </td>
              </tr>
              <tr>
                <td className="py-4 font-bold text-(--color-secondary)">03</td>
                <td className="py-4 font-semibold">Proposal</td>
                <td className="py-4 text-gray-600">
                  Receive a custom menu and pricing for approval.
                </td>
              </tr>
              <tr>
                <td className="py-4 font-bold text-(--color-secondary)">04</td>
                <td className="py-4 font-semibold">Delivery</td>
                <td className="py-4 text-gray-600">
                  We deliver and set up so you can focus on your guests.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Quality Note & CTA */}
      <div className="text-center bg-black rounded-2xl p-10">
        <p className="italic text-[#ffffff98] mb-6 text-lg">
          "We believe the best flavor comes from real butter, local eggs, and a
          lot of patience."
        </p>
        <h3 className="text-2xl text-white font-bold mb-8">
          Ready to make your next event delicious?
        </h3>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/gallery">
            <button className="bg-white px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
              Get in touch
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
