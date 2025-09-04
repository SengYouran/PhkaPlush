import React, { useRef, useState } from "react";

function RelateProduct({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const refFeedback = useRef(null);
  function handleScroll(index) {
    const ref = refFeedback.current;
    const scrollAmount = ref.offsetWidth * index;
    ref.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  }
  function handleNext() {
    if (currentIndex < products?.feedback?.length - 1) {
      handleScroll(currentIndex + 1);
    }
  }
  function handlePrev() {
    if (currentIndex > 0) {
      handleScroll(currentIndex - 1);
    }
  }
  return (
    <section className="mt-4">
      <div className="bg-white p-2 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-2">
        <span className="flex flex-col gap-2">
          <h2 className="text-center text-3xl font-rowdies">
            {products?.text_befenit}
          </h2>
          <img className="w-full" src={products?.befenit} alt="Image Befenit" />
        </span>
        <span className="flex flex-col gap-2 mt-2 md:mt-0">
          <h2 className="text-center text-3xl font-rowdies">
            {products?.text_how_use}
          </h2>
          <img
            className="w-full"
            src={products?.how_use}
            alt="Image how to use"
          />
        </span>
      </div>
      {products?.how_keep ? (
        <div className="mt-4 bg-white p-2 rounded-2xl">
          <h2 className="text-center text-3xl font-rowdies">How to Keep</h2>
          <div className="mt-2 ">
            <img
              className="w-full h-[20rem] md:h-[40rem]"
              src={products?.how_keep}
              alt="Image how to keep"
            />
          </div>
        </div>
      ) : null}
      <div className="mt-4 bg-white p-2 rounded-2xl relative">
        <h2 className="text-center text-3xl font-rowdies">
          {products?.text_feedback}
        </h2>
        <span
          className={`absolute left-8 top-1/2 transform -translate-1/2 bg-black text-white py-1 px-2 rounded-full cursor-pointer z-10
    ${
      currentIndex === 0
        ? "pointer-events-none opacity-50"
        : "hover:bg-pink-300"
    }`}
          onClick={handlePrev}
        >
          <i className="fa-solid fa-less-than"></i>
        </span>
        <div
          ref={refFeedback}
          className="overflow-x-auto flex mt-2 conrainer-scroll"
        >
          {products?.feedback?.map((render, index) => {
            return (
              <div className="flex-[0_0_100%] scroll_middle" key={index}>
                <img
                  className="w-full h-[20rem] md:h-[40rem]"
                  src={render}
                  alt="Image Feedback"
                />
              </div>
            );
          })}
        </div>
        <span
          className={`absolute right-1 top-1/2 transform -translate-1/2 bg-black text-white py-1 px-2 rounded-full cursor-pointer z-10
    ${
      currentIndex === products?.feedback?.length - 1
        ? "pointer-events-none opacity-50"
        : "hover:bg-pink-300"
    }`}
          onClick={handleNext}
        >
          <i className="fa-solid fa-greater-than"></i>
        </span>
        <div className="flex  items-center gap-4 absolute bottom-4 left-1/2 transform -translate-1/2">
          {products?.feedback?.map((_, i) => (
            <div
              key={i}
              className={`w-[15px] h-[15px] border rounded-[50%] ${
                currentIndex === i ? "bg-pink-600 border-blue-950" : "bg-white"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelateProduct;
