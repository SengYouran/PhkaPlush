import React from "react";
import useInViewAnimation from "../Custom_hook/useInViewAnimation.js";

function WhyUs() {
  const refs = useInViewAnimation("active", 150); // active class + 150ms delay per item

  const items = [
    {
      title: "Access / 24",
      text: "Our skincare experts are ready to help you anytime, day or night.",
    },
    {
      title: "Phka Blush",
      text: "Phka Blush Pich Pisey 3‑in‑1 Cream Blush Lip Eyeshadow",
    },
    {
      title: "Underarm Cream",
      text: "Long-lasting freshness with natural ingredients — no harsh chemicals.",
    },
    {
      title: "Natural Ingredients",
      text: "We use only gentle, skin-safe, and nature-derived products.",
    },
  ];

  return (
    <>
      <section className="py-12 bg-rose-50 mt-4">
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-10">
          Why Choose{" "}
          <span className="text-rose-500 font-rowdies">Pich Pisey</span>?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 2xl:h-[12rem] px-4">
          {items.map((item, i) => (
            <div
              key={i}
              ref={(el) => (refs.current[i] = el)}
              className="fade-in bg-white p-6 h-[10rem] rounded-xl shadow-md hover:shadow-lg transition text-center"
            >
              <h3 className="text-[16px] 2xl:text-2xl font-semibold text-rose-400 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm 2xl:text-[16px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-black opacity-80 text-white p-8 mt-4">
        <span className="flex items-center gap-4">
          <i class="fa-solid fa-star text-orange-400"></i>
          <h2>100% secure online payment</h2>
        </span>
      </div>
    </>
  );
}

export default WhyUs;
