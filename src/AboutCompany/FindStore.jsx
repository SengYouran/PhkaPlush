import React, { useState } from "react";
import Footer from "../Page/Footer";

const locations = [
  {
    name: "ព្យួរ៉ា & អ៊ែរ៉ា (Purerand’Aera)",
    address: "ព្យួរ៉ា & អ៊ែរ៉ា ( Purerand’Aera )",
  },
  { name: "Kosmic Beauty", address: "GWP7+PPV, ភ្នំពេញ" },
  { name: "Norm+ Toul Tompoung", address: "St 476 &, St 155, Phnom Penh" },
  {
    name: "Costmebeauty រាជធានី",
    address: "138AB Street 450, Phnom Penh 120110",
  },
  { name: "Norm+ Street360", address: "GWX9+662, ផ្លូវលេខ ៣៦០, ភ្នំពេញ" },
  { name: "Norm+ Boengkengkang", address: "142 street 51, 301, Phnom Penh" },
  { name: "Costmebeauty BKK", address: "13 ផ្លូវលេខ ៥៧, ភ្នំពេញ 12302" },
  { name: "My beauty station BKK", address: "វិថី ​ប៉ាស្ទ័រ (៥១), ភ្នំពេញ" },
  { name: "Norm+ Takhmao", address: "GVVV+8X4, ភ្នំពេញ" },
  { name: "Norm+ Aeon MeanChey", address: "11.483999, 104.917472" },
  {
    name: "Norm+ Chamkar Doung",
    address: "Chamkar Doung Street (217), Phnom Penh",
  },
  {
    name: "Norm+ Steung Mean Chey",
    address: "Samdech Monireth Blvd (217), Phnom Penh",
  },
  {
    name: "Kbeautyandcosmetics.k",
    address: "#1B2B. Street 217, Stueng Mean Chey, Phnom Penh 12352",
  },
  { name: "Find Link", address: "128 មហាវិថី កម្ពុជាក្រោម (១២៨), ភ្នំពេញ" },
  { name: "My beauty station STM", address: "11.5662922,104.8944237" },
  {
    name: "Norm+ Kampucheakrom",
    address: "Kampuchea Krom Blvd (128), Phnom Penh",
  },
  { name: "Costmebeauty Fun Mall TK", address: "11.5771465,104.8942238" },
  { name: "My beauty station Toul Kork", address: "11.5778026,104.8963058" },
  { name: "Norm+ Toul Kork", address: "11.5838384,104.8986371" },
  { name: "Costmebeauty Sensok", address: "11.5866334,104.8818768" },
  { name: "Norm+ Calmette", address: "11.5812282,104.9169177" },
  { name: "MunchieexSpeedy", address: "11.5942009,104.8836957" },
  { name: "My beauty station Sensok", address: "11.5953561,104.8734227" },
  { name: "Norm+ Aeon SenSok", address: "11.5998051,104.8856629" },
  { name: "Norm+ Chhuk Meas", address: "11.5731125,104.8538281" },
  { name: "My beauty station Chhuk Meas", address: "11.5712884,104.8542451" },
  { name: "Norm+ Kampot", address: "10.6090299,104.1839054" },
  { name: "Norm+ Preah Sihanouk", address: "10.6257834,103.5220566" },
];

const FindStore = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [viewMap, setViewMap] = useState(false);
  return (
    <React.Fragment>
      <div className="min-h-screen bg-gray-100 p-6 relative">
        <h1 className="text-3xl font-bold text-center mb-4">
          📍 Find Store location near you
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 cursor-pointer">
          {locations.map((loc, index) => (
            <div
              key={index}
              className={`bg-white p-4 rounded-lg shadow hover:shadow-md transition ${
                selectedLocation === loc ? "ring-2 ring-pink-500" : ""
              }`}
              onClick={() => {
                setSelectedLocation(loc);
                setViewMap(true);
              }}
            >
              <h2 className="text-xl font-semibold text-pink-600">
                {index + 1}. {loc.name}
              </h2>
              <p className="text-gray-700 mt-1">{loc.address}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  loc.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-blue-500 hover:underline"
              >
                បើកក្នុងផែនទី Google
              </a>
            </div>
          ))}
        </div>

        {/* Embedded Google Map */}
        <div
          className={`w-full fixed top-1/2 left-1/2 -translate-1/2 bg-white px-6 py-2 
          transation-all duration-600 ease-in-out transform ${
            viewMap ? "z-85 opacity-100 scale-100" : "-z-80 opacity-0 scale-0"
          }`}
        >
          <i
            className="fa-solid fa-xmark fixed right-8 top-5 text-2xl cursor-pointer"
            onClick={() => setViewMap(false)}
          ></i>
          {selectedLocation && (
            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                🗺 ផែនទីសម្រាប់: {selectedLocation.name}
              </h2>
              <div className="w-full h-[400px] rounded overflow-hidden">
                <iframe
                  title="Google Map"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    selectedLocation.address
                  )}&output=embed`}
                  className="border rounded"
                ></iframe>
              </div>
            </div>
          )}
        </div>
        <div
          className={`fixed inset-0 bg-gray-200 ${
            viewMap ? "z-70 opacity-70 " : "-z-80 opacity-0"
          }`}
          onClick={() => setViewMap(false)}
        ></div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default FindStore;
