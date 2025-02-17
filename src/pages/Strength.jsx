import React from "react";

const slides = [
  { id: 1,  bg: "https://wallpapercave.com/uwp/uwp4672102.jpeg" },
  { id: 2,  bg: "https://wallpapercave.com/uwp/uwp4672103.jpeg" },
  { id: 3,  bg: "https://wallpapercave.com/uwp/uwp4672101.jpeg" },
];

const Strength = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
      {slides.map((slide) => (
        <section
          key={slide.id}
          className="relative h-screen flex items-center justify-center text-white snap-start"
        >
          {/* Background Image with Parallax Effect */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${slide.bg})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div> {/* Gradient Overlay */}
          </div>

          {/* Text Content */}
         
        </section>
      ))}
    </div>
  );
};

export default Strength;
