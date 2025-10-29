import React, { useEffect, useRef, useState } from "react";
import Phka1 from "../assets/Banner/Phka.webp";
import Phka2 from "../assets/Banner/Phka2.webp";
import Phka4 from "../assets/Banner/Phka2.jpeg";
import Phka3 from "../assets/Banner/Phka3.jpg";
import Phka5 from "../assets/Banner/Phka4.jpg";

const banner = [Phka1, Phka3, Phka4, Phka5, Phka2];

function Banner() {
  const refContainer_scroll = useRef(null);
  const currentIndexRef = useRef(0); // for internal tracking
  const [currentIndex, setCurrentIndex] = useState(0); // for dot UI
  const [reset, setReset] = useState(null);
  const [isJumping, setIsJumping] = useState(false);
  const extendedBanner = [...banner, banner[0]]; // Clone first image for looping

  const scrollToIndex = (index, smooth = true) => {
    const container = refContainer_scroll.current;
    if (!container) return;

    const width = container.offsetWidth;
    const left = index * width;

    // Logging
    

    container.style.scrollBehavior = smooth ? "smooth" : "auto";
    container.scrollTo({ left });

    // After jump (instant), re-enable smooth for next scrolls
    if (!smooth) {
      requestAnimationFrame(() => {
        container.style.scrollBehavior = "smooth";
      });
    }
  };

  // Auto scroll every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      currentIndexRef.current += 1;

      if (currentIndexRef.current === banner.length) {
        // Scroll to clone (smooth)
        setIsJumping(true);
        scrollToIndex(currentIndexRef.current, true);
        // Then instantly jump to real first slide
        setTimeout(() => {
          scrollToIndex(0, false);
          currentIndexRef.current = 0;
          setCurrentIndex(0);
          setIsJumping(false);
          setReset(0);
        }, 500); // match transition duration
      } else {
        scrollToIndex(currentIndexRef.current, true);
        setCurrentIndex(currentIndexRef.current);
        setReset(null);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle manual scroll
  const handleScroll = () => {
    const container = refContainer_scroll.current;
    if (!container) return;

    const width = container.offsetWidth;
    const scrollLeft = container.scrollLeft;
    const index = Math.round(scrollLeft / width);

    currentIndexRef.current = index;
    setCurrentIndex(index);

    // If scrolled to clone (last slide), reset to real first
    if (index === banner.length && !isJumping) {
      setIsJumping(true);
      setTimeout(() => {
        scrollToIndex(0, false);
        currentIndexRef.current = 0;
        setCurrentIndex(0);
        setIsJumping(false);
      }, 500);
    }
  };

  return (
    <React.Fragment>
      <div
        className="container-scroll flex overflow-x-auto w-screen md:ml-0 md:w-full h-[50vh] xl:h-full scroll-smooth"
        ref={refContainer_scroll}
        onScroll={handleScroll}
        style={{
          scrollSnapType: "x mandatory",
        }}
      >
        {extendedBanner.map((src, i) => (
          <span
            className="w-full h-full customer_scroll"
            key={i}
            style={{ scrollSnapAlign: "start", flexShrink: 0 }}
          >
            <img
              src={src}
              alt={`Banner ${i}`}
              className={`w-full h-full ${reset === 0 ? "md:ml-2.5" : ""}`}
            />
          </span>
        ))}
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center items-center gap-4 p-4 -mt-12">
        {banner.map((_, i) => (
          <div
            key={i}
            className={`auto-border w-[60px] h-[1px] bg-gray-900 rounded relative overflow-hidden ${
              i === currentIndex % banner.length ? "active" : ""
            }`}
          ></div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Banner;
