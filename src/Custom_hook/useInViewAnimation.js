import { useEffect, useRef } from "react";

export default function useInViewAnimation(className = "active", delay = 100) {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(className);
            }, index * delay);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elementsRef.current.forEach((el) => el && observer.observe(el));

    return () => {
      elementsRef.current.forEach((el) => el && observer.unobserve(el));
    };
  }, [className, delay]);

  return elementsRef;
}
