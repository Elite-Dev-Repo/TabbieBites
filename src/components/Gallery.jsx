import React, { useState } from "react";
import image1 from "../assets/image (1).jpg";
import image2 from "../assets/image (2).jpg";
import image3 from "../assets/image (3).jpg";
import image4 from "../assets/image (4).jpg";
import image5 from "../assets/image (5).jpg";
import image6 from "../assets/image (6).jpg";
import image7 from "../assets/image (7).jpg";
import image8 from "../assets/image (8).jpg";
import image9 from "../assets/image (9).jpg";
import image10 from "../assets/image (10).jpg";
import image11 from "../assets/image (11).jpg";
import image12 from "../assets/image (12).jpg";
import image13 from "../assets/image (13).jpg";
import image14 from "../assets/image (14).jpg";
import image15 from "../assets/image (15).jpg";
import image16 from "../assets/image (16).jpg";
import image17 from "../assets/image17.jpg";
import { MoveLeft } from "lucide-react";

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const imagelist = [
    { image: image1, title: "image1", description: "Small Chops" },
    { image: image2, title: "image2", description: "pancakes" },
    { image: image3, title: "image3", description: "Birthday Cake" },
    { image: image4, title: "image4", description: "Birthday Cake" },
    { image: image5, title: "image5", description: "Naked Cake" },
    {
      image: image6,
      title: "image6",
      description: "Traditional Themed Wedding Cake",
    },
    { image: image7, title: "image7", description: "Office Gatherings Cake" },
    {
      image: image8,
      title: "image8",
      description: "Birthday Cake for a Loved One",
    },
    { image: image9, title: "image9", description: "Food Plate" },
    { image: image10, title: "image10", description: "Convocation Cupcake" },
    {
      image: image11,
      title: "image11",
      description: "Naked Convocation Cupcake",
    },
    { image: image12, title: "image12", description: "Chinchin" },
    { image: image13, title: "image13", description: "Sign Out Cake" },
    {
      image: image14,
      title: "image14",
      description: "Birthday Cake for a Loved One",
    },
    {
      image: image15,
      title: "image15",
      description: "Birthday Cake for a Loved One",
    },
    {
      image: image16,
      title: "image16",
      description: "Birthday Cake for Partner",
    },
    { image: image17, title: "image17", description: "Graduation Cake" },
  ];

  return (
    <body>
      <section className="py-12  min-h-screen">
        <a href="/" className="flex items-center gap-2">
        <MoveLeft />  Back to Home 
        </a>
        <div className="max-w-7xl mx-auto px-4">
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
