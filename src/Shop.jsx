import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Toaster, toast } from "sonner";

import { galleryImages } from "./assets/galleryImages";

const WHATSAPP_NUMBER = "2348078391732";

const catalogueDetails = {
  6: { name: "Traditional Wedding Cake", price: 200000 },
  3: { name: "Classy White Vintage Cake", price: 65000 },
  5: { name: "Naked Bento Cake", price: 4000 },
  1: { name: "Small Chops with Peppered Chicken", price: 2500 },
  10: { name: "Box of 12 Decorated Cupcakes", price: 18000 },
  11: { name: "Box of 24 Naked Cupcakes", price: 20000 },
  12: { name: "Big Jar - Crunchy Milky Chinchin", price: 10000 },
  15: { name: "Peach Buttercream Birthday Cake", price: 18000 },
  16: { name: "White Buttercream Birthday Cake", price: 19000 },
  17: { name: "Convocation Cake", price: 40000 },
  21: { name: "50th Birthday Cake", price: 20000 },
  28: { name: "Pearl Ribbon Birthday Cake" },
  29: { name: "Money Pull-Away Cake" },
  30: { name: "Bauble & Gold Leaf Cake" },
  31: { name: "Lilac Petal Celebration Cake" },
  33: { name: "Blue Ombré Birthday Cake" },
};

const getCategory = (name) => {
  const value = name.toLowerCase();
  if (value.includes("cupcake")) return "Cupcakes";
  if (value.includes("bento")) return "Bento";
  if (value.includes("chinchin")) return "Snacks";
  if (value.includes("chop") || value.includes("platter")) return "Savoury";
  if (value.includes("pancake")) return "Breakfast";
  return "Cakes";
};

const formatPrice = (price) =>
  price == null ? "Ask for price" : `\u20A6${price.toLocaleString()}`;

const ProductCard = ({ product }) => {
  const handleOrder = () => {
    const message = `Hello TabbieBakes, I want to order the ${product.name}.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    toast.success("Opening WhatsApp…");
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-tertiary/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-tertiary/20 hover:shadow-[0_28px_70px_-40px_rgba(33,27,27,0.45)]">
      <div className="relative aspect-4/5 overflow-hidden bg-[#eee9e5]">
        <img
          src={product.img}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />

        <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-tertiary uppercase backdrop-blur">
          {product.category}
        </span>

        <span
          className={`absolute bottom-4 left-4 rounded-full px-3.5 py-1.5 text-xs font-semibold shadow-sm backdrop-blur ${
            product.price == null
              ? "bg-white/85 text-tertiary/70"
              : "bg-white/95 text-secondary"
          }`}
        >
          {formatPrice(product.price)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-base leading-snug font-medium tracking-tight text-tertiary">
          {product.name}
        </h2>

        <button
          type="button"
          onClick={handleOrder}
          aria-label={`Order ${product.name} on WhatsApp`}
          className="mt-4 flex items-center justify-between gap-3 border-t border-tertiary/10 pt-4 text-[10px] font-semibold tracking-[0.16em] text-tertiary uppercase transition-colors hover:text-secondary"
        >
          Order on WhatsApp
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-tertiary text-primary transition-all duration-300 group-hover:bg-secondary">
            <i className="hgi-stroke hgi-whatsapp inline-block text-[1.125rem] leading-none" aria-hidden="true" />
          </span>
        </button>
      </div>
    </article>
  );
};

const Shop = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

  const products = useMemo(
    () =>
      galleryImages
        .filter((item) => item.number !== 32)
        .map((item) => {
          const details = catalogueDetails[item.number];
          const name = details?.name || item.description;

          return {
            id: item.number,
            img: item.image,
            name,
            price: details?.price ?? null,
            category: getCategory(name),
          };
        }),
    [],
  );

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(new Set(products.map((product) => product.category))),
    ],
    [products],
  );

  const visibleProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <>
      <Nav />
      <div className="flex min-h-screen flex-col bg-primary text-[#211b1b]">
        <Toaster position="top-center" richColors />

        <main className="flex-1 pt-6 pb-[clamp(4rem,8vw,7rem)]">
          <div className="cont mx-auto px-6 lg:px-10">
            <div className="flex items-center justify-between border-b border-tertiary/10 py-4">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="group inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.18em] text-tertiary/60 uppercase transition-colors hover:text-secondary"
              >
                <i
                  className="hgi-stroke hgi-arrow-left-01 inline-block text-base leading-none transition-transform duration-300 group-hover:-translate-x-1"
                  aria-hidden="true"
                />
                Back
              </button>
              <span className="text-[10px] tracking-[0.18em] text-tertiary/50 uppercase">
                {products.length} handmade favourites
              </span>
            </div>

            <header className="grid gap-8 border-b border-tertiary/10 py-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16 lg:py-16">
              <div>
                <span className="block text-[0.68rem] font-bold uppercase leading-[1.5] tracking-[0.18em] text-[#a92d4b]">Baked fresh, made to share</span>
                <h1 className="mt-4 text-[clamp(2.9rem,7vw,6.2rem)] leading-[0.92] font-medium tracking-[-0.06em] text-tertiary">
                  Find your <span className="text-secondary">favourite.</span>
                </h1>
              </div>
              <div className="max-w-md lg:justify-self-end">
                <p className="text-sm leading-relaxed text-[#756c69]">
                  Thoughtful treats for celebrations, gifting, and the everyday.
                  Pick a piece below to start your order on WhatsApp.
                </p>
                <a
                  href={`https://wa.me/c/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 border-b border-secondary pb-1 text-[11px] font-semibold tracking-[0.16em] text-tertiary uppercase transition-colors hover:text-secondary"
                >
                  <i
                    className="hgi-stroke hgi-whatsapp inline-block text-[1.125rem] leading-none"
                    aria-hidden="true"
                  />
                  Chat with us
                </a>
              </div>
            </header>

            <div className="flex flex-wrap items-center gap-2 py-8">
              {categories.map((category) => {
                const isActive = category === activeCategory;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={isActive}
                    className={`rounded-full border px-4 py-2 text-[11px] font-semibold tracking-[0.1em] uppercase transition-all duration-300 ${
                      isActive
                        ? "border-tertiary bg-tertiary text-primary"
                        : "border-tertiary/15 text-tertiary/60 hover:border-tertiary/40 hover:text-tertiary"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
              <span className="ml-auto text-[10px] tracking-[0.18em] text-tertiary/40 uppercase">
                {visibleProducts.length} pieces
              </span>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <section className="mt-16 grid gap-6 rounded-[2rem] bg-tertiary px-8 py-10 text-primary md:grid-cols-[1fr_auto] md:items-center md:px-12">
              <div>
                <span className="text-[10px] tracking-[0.22em] text-primary/60 uppercase">
                  Something bespoke?
                </span>
                <h2 className="mt-3 text-2xl font-light tracking-tight md:text-3xl">
                  Tell us what you have in mind.
                </h2>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-primary/70">
                  Custom designs, flavours, and unlisted items are always
                  welcome. Send us the details and we will take it from there.
                </p>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold tracking-wide text-primary transition-transform duration-300 hover:-translate-y-0.5"
              >
                <i
                  className="hgi-stroke hgi-whatsapp inline-block text-xl leading-none"
                  aria-hidden="true"
                />
                Start an enquiry
                <i
                  className="hgi-stroke hgi-arrow-up-right-01 inline-block text-base leading-none"
                  aria-hidden="true"
                />
              </a>
            </section>

            <p className="mt-8 text-center text-xs text-tertiary/45">
              Prices are shown where available. Ask us about custom designs,
              flavours, and unlisted items.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Shop;
