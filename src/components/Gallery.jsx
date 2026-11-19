import React, { useState } from "react";
import { galleryImages } from "../assets/galleryImages";
import { useNavigate } from "react-router-dom";

import Nav from "./Nav";

function Gallery() {
  const navigate = useNavigate();
  const [selectedImg, setSelectedImg] = useState(null);

  const imagelist = galleryImages;

  return (
    <body>
      <section className="min-h-screen w-full overflow-x-hidden">
        <Nav></Nav>
        <div className="sticky top-20 z-10 bg-primary/80 backdrop-blur-md border-b border-gray-100">
          <div className="cont py-4 flex items-center mt-10 justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all duration-300 group"
            >
              <i className="hgi-stroke hgi-arrow-left-01 inline-block text-[1.125rem] leading-none group-hover:text-primary" aria-hidden="true" />
              <span className="uppercase tracking-widest text-[10px]">
                Go Back
              </span>
            </button>
            <span className="text-[10px] uppercase tracking-[0.2em]">
              {imagelist.length} Curated Pieces
            </span>
          </div>
        </div>
        <div className="cont mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-center mb-12 text-gray-800">
            Our Past Works
          </h1>

          {/* Masonry Layout using CSS Columns */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {imagelist.map((item, index) => (
              <div
                key={index}
                className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedImg(item)}
              >
                <img
                  src={item.image}
                  alt={item.description}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-sm font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Description for mobile/static view */}
                <div className="p-3 bg-white md:hidden">
                  <p className="text-xs text-gray-600 font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImg && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-6 right-6 text-white text-4xl">
              &times;
            </button>
            <div className="max-w-4xl max-h-[90vh] flex flex-col items-center">
              <img
                src={selectedImg.image}
                alt="Full view"
                className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
              />
              <p className="text-white mt-4 text-xl font-serif italic">
                {selectedImg.description}
              </p>
            </div>
          </div>
        )}
      </section>
    </body>
  );
}

export default Gallery;
