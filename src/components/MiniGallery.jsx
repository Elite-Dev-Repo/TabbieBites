import React, { useState } from "react";
import image1 from "../assets/image (1).jpg";
import image4 from "../assets/image (4).jpg";
import image6 from "../assets/image (6).jpg";
import image7 from "../assets/image (7).jpg";

import image9 from "../assets/image (9).jpg";
import image10 from "../assets/image (10).jpg";

import image16 from "../assets/image (16).jpg";
import image17 from "../assets/image17.jpg";

function MiniGallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const imagelist = [
    { image: image4, title: "image4", description: "Birthday Cake" },
    {
      image: image6,
      title: "image6",
      description: "Traditional Themed Wedding Cake",
    },

    { image: image1, title: "image1", description: "Small Chops" },
    { image: image7, title: "image7", description: "Office Gatherings Cake" },
    {
      image: image16,
      title: "image16",
      description: "Birthday Cake for Partner",
    },

    { image: image10, title: "image10", description: "Convocation Cupcake" },
    { image: image17, title: "image17", description: "Graduation Cake" },
    { image: image9, title: "image9", description: "Food Plate" },
  ];

  return (
    <body>
      <section className="page-section py-12  min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold border-solid border w-fit mx-auto mb-9 px-7 py-3 rounded-full">
            Our Past Works
          </h2>

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

        <div className=" p-5">
          <a
            href="/gallery"
            className="px-8 py-3 border hover:bg-black hover:text-white float-right text-center mr-7 mb-12"
          >
            {" "}
            <button>View More</button>
          </a>
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

export default MiniGallery;
