import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingBag, Check } from "lucide-react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Toaster, toast } from "sonner";

// Asset Imports
import image1 from "./assets/image (1).jpg";
import image21 from "./assets/image (21).jpeg";
import image3 from "./assets/image (3).jpg";
import image4 from "./assets/image (4).jpg";
import image5 from "./assets/image (5).jpg";
import image6 from "./assets/image (6).jpg";
import image12 from "./assets/image (12).jpg";
import image15 from "./assets/image (15).jpg";
import image16 from "./assets/image (16).jpg";
import image11 from "./assets/image (11).jpg";
const ProductCard = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleOrder = () => {
    const phoneNumber = "2348078391732";
    const message = `Hello TabbieBakes, I want to order the ${product.name}.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    setIsAdded(true);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsAdded(false);
    }, 800);
  };

  return (
    /* 1. Added break-inside-avoid to prevent card splitting */
    /* 2. Changed mb-8 to provide consistent vertical spacing in columns */
    <div className="break-inside-avoid mb-8 group flex flex-col bg-stone-50 p-4 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 font-['Quicksand']">
      <div className="relative aspect-square overflow-hidden bg-stone-100 rounded-lg">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="mt-5 space-y-4">
        <div className="flex justify-between items-start gap-2">
          <h4 className="text-lg font-bold text-stone-800 leading-tight">
            {product.name}
          </h4>
          <p className="text-md font-bold text-[var(--color-secondary)] whitespace-nowrap">
            ₦{product.price.toLocaleString()}
          </p>
        </div>

        <button
          onClick={() => {
            toast.loading("Redirecting to WhatsApp...");
            setTimeout(() => handleOrder(), 100);
          }}
          className="flex w-full items-center justify-center gap-2 py-3 px-6 uppercase text-[10px] tracking-[0.2em] font-bold transition-all active:scale-95 bg-[#000] text-[var(--color-primary)] hover:brightness-110"
        >
          {isAdded ? (
            <>
              Order Loading <Check size={16} />
            </>
          ) : (
            <>
              Order on WhatsApp <ShoppingBag size={16} />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

const Shop = () => {
  const navigate = useNavigate();

  const products = [
    { id: 2, name: "Traditional Wedding Cake", price: 200000, img: image6 },

    {
      id: 4,
      name: "Classy white Vintage Cake",
      price: 65000,
      img: image3,
    },
    { id: 1, name: "Naked Bento Cake", price: 4000, img: image5 },
    { id: 5, name: "50th Birthday Cake", price: 20000, img: image21 },

    {
      id: 6,
      name: "Small Chops with Peppered Chicken",
      price: 2500,
      img: image1,
    },
    {
      id: 12,
      name: "Big Jar - Crunchy Milky Chinchin",
      price: 27500,
      img: image12,
    },
    {
      id: 15,
      name: "Peach Buttercream Birthday Cake ",
      price: 18000,
      img: image15,
    },
    {
      id: 16,
      name: "White Buttercream Birthday Cake ",
      price: 19000,
      img: image16,
    },
    {
      id: 17,
      name: "Box of 24 Naked cupcakes ",
      price: 20000,
      img: image11,
    },
    {
      id: 18,
      name: "Box of 12 Decorated Cupcakes ",
      price: 18000,
      img: image11,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-primary font-['Quicksand']">
      <Toaster position="top-center" richColors />

      <Nav />

      <div className="sticky top-[0px] z-30 bg-primary/80 backdrop-blur-md border-b border-stone-200">
        <div className="cont py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm font-semibold text-stone-600 hover:text-[var(--color-secondary)] transition-all duration-300 group"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="uppercase tracking-widest text-[10px]">
              Go Back
            </span>
          </button>
        </div>
      </div>

      <main className="flex-grow py-12">
        <div className="cont">
          <header className="flex flex-col gap-2 mb-10">
            <h3 className="text-3xl md:text-5xl font-bold text-[var(--color-secondary)]">
              Shop Collection
            </h3>
            <p className="text-[10px] text-stone-500 uppercase tracking-[0.3em] font-bold">
              If you can't find what you're looking for, send us a message on
              WhatsApp
            </p>
          </header>

          {/* 3. REPLACED GRID WITH COLUMNS */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
