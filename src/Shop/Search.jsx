import React, { useEffect, useRef } from "react";
import { useControlData } from "../Context";
import { useNavigate } from "react-router-dom";

function Search() {
  const { search, setSearch, valueSearch, setValueSearch } = useControlData();
  const refSearch = useRef(null);
  const navigator = useNavigate();
  useEffect(() => {
    if (search && refSearch.current) {
      refSearch.current.focus();
    }
  }, [search]);
  function handleSearch(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      if (valueSearch === "") return;
      navigator("/shop");
      setSearch(false);
      setValueSearch("");
    }
  }
  return (
    <>
      {/* ✅ Overlay - always behind search, but on top of page */}
      <div
        className={`fixed inset-0 bg-black opacity-30 z-60 cursor-pointer ${
          search ? "block " : "hidden"
        }`}
        onClick={(e) => {
          setSearch(false);
          e.stopPropagation();
        }}
      ></div>

      {/* ✅ Search Bar - top z-index */}
      <div
        className={`fixed top-0 left-1/2 bg-white w-full h-30 opacity-0  transition-all duration-300 ease-in-out ${
          search
            ? "z-70 transform -translate-x-1/2 translate-y-0 opacity-100 "
            : " -z-70 transform -translate-x-1/2 -translate-y-1/2"
        }`}
      >
        <form className="flex flex-col justify-center items-center h-full relative">
          <div className="flex justify-between items-center  ">
            <input
              ref={refSearch}
              type="search"
              name="search"
              className="search absolute left-[15%] w-[70%] h-12 text-[15px] outline-0 border-0 pl-2"
              placeholder="What are you searching for?"
              value={valueSearch}
              onKeyDown={handleSearch}
              onChange={(e) => setValueSearch(e.target.value)}
            />
            <button
              className="cursor-pointer absolute right-[15%] px-4 py-1 rounded text-black hover:bg-gray-100"
              onClick={(e) => {
                e.preventDefault();
                if(valueSearch==="")return;
                navigator("/shop");
                setSearch(false);
                setValueSearch("");
              }}
            >
              search
            </button>
          </div>
          <div className="border w-[70%] mt-5"></div>
        </form>
      </div>
    </>
  );
}

export default Search;
