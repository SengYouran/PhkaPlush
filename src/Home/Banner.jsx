import React, { useEffect, useRef, useState } from "react";
import Phka1 from "../assets/Banner/Phka.webp";
import Phka2 from "../assets/Banner/Phka2.webp";
import Phka4 from "../assets/Banner/Phka2.jpeg";
import Phka3 from "../assets/Banner/Phka3.jpg";
import Phka5 from "../assets/Banner/Phka4.jpg";

const banner = [Phka1, Phka3, Phka4, Phka5, Phka2];

function Banner() {
  const refContainer_scroll = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const extendedBanner = [...banner, banner[0]];
  console.log(isJumping);
  // Scroll to index with option to disable smooth
  const scrollToIndex = (index, smooth = true) => {
    const container = refContainer_scroll.current;
    if (!container) return;
    const width = container.offsetWidth;
    console.log("num=", index);
    console.log("widht:", smooth);
    if (smooth) {
      container.style.scrollBehavior = "smooth";
    } else {
      container.style.scrollBehavior = "auto";
    }

    container.scrollTo({
      left: index * width,
      behavior: smooth ? "smooth" : "auto",
    });
  };

  // Auto increment index every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        return prev + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll when currentIndex changes
  useEffect(() => {
    // If reached clone slide (last index), scroll smoothly to clone slide
    if (currentIndex === banner.length) {
      scrollToIndex(currentIndex, true);
      setIsJumping(true);
    } else {
      scrollToIndex(currentIndex, true);
    }
  }, [currentIndex]);

  // Handle scroll event for loop
  const handleScroll = () => {
    if (!isJumping) return;
    const container = refContainer_scroll.current;
    const width = container.offsetWidth;
    const scrollLeft = container.scrollLeft;

    // When scroll finished moving to clone slide (approximately)
    if (Math.round(scrollLeft) === banner.length * width) {
      // Disable smooth and jump to first slide instantly
      scrollToIndex(0, false);
      setCurrentIndex(0);
      setIsJumping(false);
    }
  };

  function handleScrollByHand() {
    const container = refContainer_scroll.current;
    if (!container) return;

    const width = container.offsetWidth;
    const scrollLeft = container.scrollLeft;
    const index = Math.round(scrollLeft / width);

    setCurrentIndex(index);
  }
  return (
    <>
      <div
        className="conrainer-scroll flex overflow-x-auto w-full h-[40vh] md:h-full scroll-smooth scroll-snap-x scroll-snap-mandatory "
        ref={refContainer_scroll}
        onScrollEndCapture={() => {
          handleScroll();
        }}
        onScrollEnd={handleScrollByHand}
      >
        {extendedBanner.map((src, i) => (
          <span className=" flex-[0_0_100%] h-full" key={i}>
            <img src={src} alt={`Banner Of ${i}`} className="w-full h-full" />
          </span>
        ))}
      </div>
      <div className=" flex justify-center items-center gap-4 p-4 -mt-12">
        {banner.map((_, i) => (
          <div
            key={i}
            className={`w-[30px] h-[3px] bg-green-100 rounded relative overflow-hidden auto-border ${
              i === currentIndex % banner.length ? "active" : ""
            }`}
          ></div>
        ))}
      </div>
    </>
  );
}

export default Banner;
