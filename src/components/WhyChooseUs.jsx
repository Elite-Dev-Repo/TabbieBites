import img1 from "../assets/image3.jpg";
import img2 from "../assets/image6.jpg";
import img3 from "../assets/image8.jpg";
import img4 from "../assets/image7.jpg";

const features = [
  {
    icon: "hgi-sparkles",
    title: "Good ingredients",
    desc: "Fresh, thoughtfully sourced ingredients in every batch.",
  },
  {
    icon: "hgi-favourite",
    title: "Made for you",
    desc: "Each order is prepared to suit your occasion and your taste.",
  },
  {
    icon: "hgi-award-01",
    title: "Personal design",
    desc: "Distinctive details, shaped around the idea you bring us.",
  },
  {
    icon: "hgi-clock-01",
    title: "Ready on time",
    desc: "Clear communication and careful planning from start to finish.",
  },
];
const images = [img1, img2, img3, img4];
export default function WhyChooseUs() {
  return (
    <section
      className="bg-primary py-[clamp(5rem,10vw,9rem)] text-[#211b1b]"
      aria-labelledby="why-title"
    >
      <div className="cont mx-auto px-6 lg:px-10">
        {/* Left-Aligned Section Header */}
        <div className="mx-auto mb-14 max-w-[680px] text-center">
          <h2
            id="why-title"
            className="mb-[0.8rem] mt-[0.9rem] text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.055em]"
          >
            Why choose <span className="text-[#a92d4b]">Tabbiebakes.</span>
          </h2>
          <p className="m-0 text-base leading-[1.7] text-[#756c69]">
            Small details make every gathering feel like yours.
          </p>
        </div>

        {/* Main Split Layout: Left Bento Grid (2/3) + Right Tall Image (1/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left Side: 2-Row Bento Grid */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {/* Top Row: 2 Equal Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.slice(0, 2).map((feature, index) => (
                <article
                  key={feature.title}
                  className={`flex flex-col justify-between min-h-[210px] rounded-2xl p-6 transition-transform duration-300 ${
                    index === 0
                      ? "bg-tertiary text-primary"
                      : "bg-primary border border-tertiary/15 text-tertiary"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-3xl font-semibold tracking-tight">
                      0{index + 1}
                    </span>
                    <div
                      className={`w-10 h-10 flex items-center justify-center  ${index == 1 ? "bg-tertiary text-primary" : "text-tertiary bg-primary"}  rounded-lg`}
                    >
                      <i
                        className={`hgi-stroke ${feature.icon} inline-block text-2xl leading-none`}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className="mt-8">
                    <p className="text-sm font-light leading-relaxed opacity-85 mb-4">
                      {feature.desc}
                    </p>
                    <div
                      className={`pt-3 border-t ${
                        index === 0 ? "border-primary/15" : "border-tertiary/10"
                      }`}
                    >
                      <h3 className="text-sm font-medium tracking-tight">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Row: 3 Columns (Card 3 + Center Editorial Quote Card + Card 4) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Card 3 */}
              <article className="flex flex-col justify-between min-h-[230px] rounded-2xl bg-primary border border-tertiary/15 text-tertiary p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-3xl font-semibold tracking-tight">
                    03
                  </span>
                  <div className="w-10 h-10 flex items-center justify-center bg-tertiary text-primary rounded-lg">
                    <i
                      className={`hgi-stroke ${features[2].icon} inline-block text-2xl leading-none`}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-light leading-relaxed opacity-85 mb-4">
                    {features[2].desc}
                  </p>
                  <div className="pt-3 border-t border-tertiary/10">
                    <h3 className="text-sm font-medium tracking-tight">
                      {features[2].title}
                    </h3>
                  </div>
                </div>
              </article>

              {/* Center Editorial Card (Matches the middle quote block in your reference) */}
              <article className="flex flex-col justify-between min-h-[230px] rounded-2xl bg-primary border border-tertiary/15 text-tertiary p-6">
                <div>
                  <h3 className="text-sm font-semibold tracking-tight mb-2">
                    Crafting Lasting Memories
                  </h3>
                  <p className="text-xs font-light leading-relaxed opacity-75">
                    "Your celebration is our craft — we don't just bake cakes,
                    we create the centerpiece of your gathering."
                  </p>
                </div>

                <div className="pt-3 border-t border-tertiary/10 mt-6">
                  <span className="text-xs font-medium tracking-tight">
                    TabbieBakes Kitchen
                  </span>
                </div>
              </article>

              {/* Card 4 (Accent Card matching the bottom-right green block) */}
              <article className="flex flex-col justify-between min-h-[230px] rounded-2xl bg-secondary text-primary p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-3xl font-semibold tracking-tight">
                    04
                  </span>
                  <div className="w-10 h-10 flex items-center justify-center bg-primary text-tertiary rounded-lg">
                    <i
                      className={`hgi-stroke ${features[3].icon} inline-block text-2xl leading-none`}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-light leading-relaxed opacity-90 mb-4">
                    {features[3].desc}
                  </p>
                  <div className="pt-3 border-t border-primary/20">
                    <h3 className="text-sm font-medium tracking-tight">
                      {features[3].title}
                    </h3>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Right Side: Full-Height Feature Image */}
          <div className="grid grid-cols-2 col-span-4 gap-4">
            {images.map((img, i) => {
              return (
                <div
                  key={i}
                  className="h-full min-h-[360px] lg:min-h-full w-full overflow-hidden rounded-2xl"
                >
                  <img
                    src={img}
                    alt="TabbieBakes handcrafted celebration cake"
                    className="h-full w-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
