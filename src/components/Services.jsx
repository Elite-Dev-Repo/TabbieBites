import { useState } from "react";
import heroCheesecake from "../assets/image1.jpg";
import heroPancakes from "../assets/image8.jpg";
import heroRibbonCake from "../assets/image4.jpg";
import heroFiftieth from "../assets/image19.jpg";

const services = [
  {
    icon: "hgi-cake",
    title: "Cakes & sweet things",
    description:
      "A centrepiece for the occasion, or a little something for the everyday.",
    items: ["Celebration cakes", "Cupcakes & minis", "Seasonal pastry boxes"],
    image: heroPancakes,
  },
  {
    icon: "hgi-restaurant-01",
    title: "Gatherings & catering",
    description: "Thoughtful food for hosting, with the kitchen taken care of.",
    items: ["Intimate dinners", "Savoury bites", "Brunch spreads"],
    image: heroCheesecake,
  },
  {
    icon: "hgi-briefcase-01",
    title: "Gifting & good work",
    description:
      "Handmade treats that make a kind impression on clients and teams.",
    items: ["Appreciation boxes", "Meeting platters", "Seasonal gift sets"],
    image: heroRibbonCake,
  },
  {
    icon: "hgi-sparkles",
    title: "Custom Orders",
    description:
      "Unique creations tailored precisely to your vision and specifications.",
    items: ["Bespoke design", "Flavor consultation", "Event styling"],
    image: heroFiftieth,
  },
];

const steps = [
  "Tell us what you have in mind",
  "Choose flavours and details",
  "Confirm your order",
  "We bake and prepare it for you",
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleService = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section
      className="bg-primary py-24 text-tertiary"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="cont mx-auto px-6 lg:px-12">
        {/* Two-Column Split: Sticky Header Left, Services List Right */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Sticky Section Header, Copy & CTA */}
          <div className="flex-1 mb-14 w-full max-w-[680px] text-left lg:sticky lg:top-28 lg:w-4/12">
            <span className="text-xs uppercase tracking-widest opacity-60 mb-3 block">
              Our Expertise
            </span>
            <h2
              id="services-title"
              className="mb-[0.8rem] mt-[0.9rem] text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.055em] text-tertiary"
            >
              Services
            </h2>
            <p className="mb-8 text-base font-light leading-[1.7] text-[#756c69]">
              From small-batch everyday treats to tailored spreads for
              milestones and gatherings, every order is made fresh to suit the
              moment.
            </p>
            <a
              href="https://wa.me/c/2348078391732"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-secondary text-primary text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
            >
              <span>Book an order</span>
              <i
                className="hgi-stroke hgi-arrow-up-right-01 inline-block text-xl leading-none"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Right Column: Services List */}
          <div className="flex-1 flex flex-col gap-4 w-full lg:w-8/12">
            {services.map((service, index) => {
              const isExpanded = index === openIndex;

              return (
                <article
                  key={service.title}
                  onClick={() => toggleService(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      toggleService(index);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  aria-controls={`service-panel-${index}`}
                  className={`group cursor-pointer rounded-none border border-tertiary/15 transition-all duration-300 overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary ${
                    isExpanded
                      ? "bg-white/70 p-8 md:p-10 shadow-sm"
                      : " p-6 md:p-8"
                  }`}
                >
                  {isExpanded ? (
                    /* Reshaped Expanded Layout for Narrower Column (Stacked Vertical) */
                    <div
                      id={`service-panel-${index}`}
                      className="flex flex-col gap-6"
                    >
                      <div className="flex items-start justify-between">
                        <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-tertiary">
                          {service.title}
                        </h3>
                        <span className="flex items-center gap-3 text-xl font-mono opacity-40 shrink-0">
                          0{index + 1}/
                          <i
                            className="hgi-stroke hgi-arrow-up-01 inline-block text-xl leading-none"
                            aria-hidden="true"
                          />
                        </span>
                      </div>

                      <div className="w-full h-60 md:h-72 rounded-none overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <p className="text-base font-light leading-relaxed text-gray-600">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-3 pt-6 border-t border-tertiary/10">
                        {service.items.map((item) => (
                          <span
                            key={item}
                            className="text-xs font-medium px-4 py-2 rounded-full bg-primary text-tertiary border border-tertiary/10"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* Collapsed Layout */
                    <div
                      id={`service-panel-${index}`}
                      className="flex items-center justify-between gap-6"
                    >
                      <div className="flex items-center gap-6 md:gap-10">
                        <span className="text-xl font-mono opacity-40 shrink-0">
                          0{index + 1}/
                        </span>
                        <div className="w-16 h-12 md:w-24 md:h-16 rounded-xl overflow-hidden shrink-0 hidden sm:block">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl md:text-2xl font-medium tracking-tight text-tertiary">
                          {service.title}
                        </h3>
                      </div>
                      <i
                        className="hgi-stroke hgi-arrow-right-01 inline-block text-xl leading-none opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>

        {/* Process Panel */}

        <section className="relative py-16 md:py-24 bg-tertiary text-primary">
          {/* Heading */}
          <div className="max-w-5xl mx-auto mb-16 px-4">
            <span className="inline-flex items-center rounded-full bg-primary text-tertiary px-5 py-2 text-xs font-medium mb-6">
              How it works
            </span>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h3 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight max-w-xl">
                Four steps to something lovely.
              </h3>
              <div className="flex flex-col items-start gap-5 justify-center">
                <p className="text-sm leading-relaxed text-primary/70 max-w-xs">
                  From your first idea to the final delivery, we make every step
                  simple and enjoyable.
                </p>
                <a
                  href="https://wa.me/c/2348078391732"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-secondary text-primary font-medium tracking-wide hover:opacity-90 transition-opacity"
                >
                  <i
                    className="hgi-stroke hgi-whatsapp inline-block text-xl leading-none"
                    aria-hidden="true"
                  />
                  Start an enquiry{" "}
                  <i
                    className="hgi-stroke hgi-arrow-up-right-01 inline-block text-xl leading-none"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
            <div className="services-cta flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-12 rounded-3xl bg-tertiary text-primary gap-6"></div>
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto px-4">
            {/* Dashed connectors */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0"
              viewBox="0 0 1000 620"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <marker
                  id="process-arrow"
                  markerWidth="7"
                  markerHeight="7"
                  refX="5"
                  refY="3"
                  orient="auto"
                >
                  <path d="M0 0L6 3L0 6" stroke="currentColor" fill="none" />
                </marker>
              </defs>

              <g
                stroke="currentColor"
                strokeWidth="1.3"
                strokeDasharray="4 5"
                opacity=""
              >
                <path d="M420 90 H555 Q580 90 580 115 V155" />
                <path d="M580 270 V310 Q580 335 555 335 H420" />
                <path d="M420 430 H555 Q580 430 580 455 V495" />
              </g>
            </svg>

            <ol className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 md:gap-y-0">
              {steps.map((step, i) => (
                <li
                  key={i}
                  className={`
            flex items-stretch gap-4 p-5 md:p-6
            rounded-3xl bg-primary
            border border-primary/10
            shadow-sm min-h-[190px]
            transition-all duration-300
            
            hover:bg-primary/90 hover:-translate-y-1
            ${i % 2 === 1 ? "md:mt-24" : "md:mt-4"}
          `}
                >
                  {/* Step indicator */}
                  <div className="shrink-0 w-9 rounded-full bg-secondary text-primary flex items-center justify-center">
                    <span
                      className="text-[10px] font-semibold tracking-widest whitespace-nowrap"
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                      }}
                    >
                      STEP 0{i + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center gap-5 min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 shrink-0 rounded-full bg-tertiary flex items-center justify-center text-primary text-lg">
                        {["⌕", "✳", "◇", "↗"][i]}
                      </span>

                      <span className="text-xs uppercase tracking-widest text-tertiary font-medium">
                        Step 0{i + 1}
                      </span>
                    </div>

                    <p className="text-base md:text-lg leading-relaxed font-medium text-tertiary">
                      {typeof step === "string" ? step : step.title}
                    </p>

                    {typeof step === "object" && step.description && (
                      <p className="text-sm leading-relaxed text-primary/70">
                        {step.description}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Services CTA */}
      </div>
    </section>
  );
}
