import { useState } from "react";
import { galleryImages } from "../assets/galleryImages";

export default function MiniGallery() {
  const [selected, setSelected] = useState(null);
  return (
    <section
      className="bg-primary py-[clamp(5rem,9vw,8rem)] text-[#211b1b]"
      aria-labelledby="gallery-title"
    >
      <div className="cont">
        <div className="mb-10 flex flex-col items-start justify-between gap-8 min-[760px]:flex-row min-[760px]:items-end">
          <div>
            <span className="block text-[0.68rem] font-bold uppercase leading-[1.5] tracking-[0.18em] text-[#a92d4b]">
              04 / From our kitchen
            </span>
            <h2
              id="gallery-title"
              className="mb-0 mt-[0.9rem] text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.055em]"
            >
              A few things <span className="text-[#a92d4b]">we've made.</span>
            </h2>
          </div>
          <a
            href="/gallery"
            className="inline-flex items-center gap-[0.65rem] border-b border-[#a92d4b] pb-2 text-[0.85rem] text-[#211b1b]"
          >
            Explore the gallery{" "}
            <i
              className="hgi-stroke hgi-arrow-up-right-01 inline-block text-xl leading-none"
              aria-hidden="true"
            />
          </a>
        </div>
        <div className="grid grid-cols-4 auto-rows-[220px] gap-3 max-[760px]:grid-cols-2 max-[760px]:auto-rows-[180px] max-[480px]:auto-rows-[145px] max-[480px]:gap-[7px]">
          {galleryImages.map((item, index) => (
            <button
              type="button"
              key={item.image}
              className={`group relative min-w-0 cursor-pointer overflow-hidden border-0 bg-[#e8e1dc] p-0 text-left ${
                index === 0 || index === 5 ? "row-span-2" : ""
              } ${index === 3 ? "col-span-2" : ""}`}
              onClick={() => setSelected(item)}
              aria-label={`View ${item.description}`}
            >
              <img
                src={item.image}
                alt={item.description}
                loading="lazy"
                className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-[linear-gradient(transparent,#171212b8)] px-4 pb-[0.85rem] pt-8 text-[0.8rem] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                {item.description}
              </span>
            </button>
          ))}
        </div>
      </div>
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-[#171414f2] p-12 text-white"
          role="dialog"
          aria-modal="true"
          aria-label={selected.description}
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            className="absolute right-6 top-6 grid h-11 w-11 cursor-pointer place-items-center border border-[#ffffff55] bg-transparent text-white"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <i
              className="hgi-stroke hgi-cancel-01 inline-block text-xl leading-none"
              aria-hidden="true"
            />
          </button>
          <img
            src={selected.image}
            alt={selected.description}
            className="max-h-[78vh] max-w-[min(90vw,1100px)] object-contain"
            onClick={(event) => event.stopPropagation()}
          />
          <p className="m-0 text-[0.9rem]">{selected.description}</p>
        </div>
      )}
    </section>
  );
}
