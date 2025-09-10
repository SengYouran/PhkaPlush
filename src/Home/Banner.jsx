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
  const [isJumping, setIsJumping] = useState(false);
  const extendedBanner = [...banner, banner[0]];

  const scrollToIndex = (index, smooth = true) => {
    const container = refContainer_scroll.current;
    if (!container) return;
    const width = container.offsetWidth;

    container.style.scrollBehavior = smooth ? "smooth" : "auto";
    container.scrollTo({
      left: index * width ,
      behavior: smooth ? "smooth" : "auto",
    });
  };

  // Auto scroll every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      currentIndexRef.current += 1;

      // If reached clone slide
      if (currentIndexRef.current === banner.length) {
        setIsJumping(true);
        scrollToIndex(currentIndexRef.current, true);

        setTimeout(() => {
          scrollToIndex(0, false);
          currentIndexRef.current = 0;
          setCurrentIndex(0);
          setIsJumping(false);
        }, 500); // wait for scroll to finish
      } else {
        scrollToIndex(currentIndexRef.current, true);
        setCurrentIndex(currentIndexRef.current);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle manual scroll (user swiping)
  const handleScroll = () => {
    const container = refContainer_scroll.current;
    if (!container) return;

    const width = container.offsetWidth;
    const scrollLeft = container.scrollLeft;
    const index = Math.round(scrollLeft / width);

    currentIndexRef.current = index;
    setCurrentIndex(index);

    // If clone slide and jumping logic missed
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
    <>
      <div
        className="conrainer-scroll flex overflow-x-auto w-screen -ml-4.5 md:ml-0 md:w-full h-[40vh] md:h-full scroll-smooth "
        ref={refContainer_scroll}
        onScroll={handleScroll}
      >
        {extendedBanner.map((src, i) => (
          <span className=" w-full h-full customer_scroll" key={i}>
            <img src={src} alt={`Banner Of ${i}`} className="w-full h-full" />
          </span>
        ))}
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center items-center gap-4 p-4 -mt-12">
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
