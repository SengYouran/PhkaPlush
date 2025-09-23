import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useControlData } from "../Context";

const linkAccount = [
  { id: 1, link: "Profile", path: "editprofile" },
  { id: 2, link: "Orders & Return", path: "orders" },
  { id: 3, link: "Gift Card", path: "giftcard" },
  { id: 4, link: "Address Book", path: "addressbook" },
  { id: 5, link: "Change Password", path: "password" },
];

function LinkAccount({ setShowHidden }) {
  const [activeLinkAcc, setActiveLinkAcc] = useState(0);
  const location = useLocation(); // ✅ បង្កើត location object
  const [faqguides, setFaqGuides] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const locationPath = linkAccount.find(({ path }) =>
      location.pathname.includes(path)
    );
    if (locationPath) {
      setActiveLinkAcc(locationPath.id);
    }
  }, [location.pathname]); // ✅ ដាក់តែ pathname ជា dependency
  const { setDetail, setPolicy } = useControlData();
  function handlelink(path) {
    navigate(path);
  }
  return (
    <div className={`mt-2 flex flex-col gap-4`}>
      <ul className="flex flex-col gap-2">
        {linkAccount.map((render) => (
          <li
            key={render.id}
            className={`flex justify-between items-center group cursor-pointer transition ${
              activeLinkAcc === render.id
                ? "font-medium border border-pink-600 border-b-black border-t-black border-b-2 border-t-2 py-1 pl-2 rounded-br-xl rounded-tl-xl"
                : "text-gray-600 hover:text-black"
            }`}
            onClick={() => {
              setDetail(false);
              setFaqGuides(false);
              setActiveLinkAcc(render.id);
              handlelink(render.path);
              setShowHidden(false);
            }}
          >
            <Link>{render.link}</Link>
            <i
              className="fa-solid fa-greater-than text-xs transform transition-all duration-500 ease-in-out group-hover:-rotate-180
              transform-origin-center mr-1"
            ></i>
          </li>
        ))}
      </ul>
      <div className="border mt-2"></div>
      <div className="flex flex-col gap-2 mb-4">
        <h2 className="text-sm font-bold">Support</h2>
        <span
          className="flex justify-between items-center group cursor-pointer"
          onClick={() => {
            setFaqGuides(false);
            setActiveLinkAcc(null);
            setPolicy(true);
          }}
        >
          <h2 className="cursor-pointer text-gray-600 hover:text-black">
            Privacy Policy
          </h2>
          <i
            className="fa-solid fa-greater-than text-xs transform transition-all duration-500 ease-in-out group-hover:-rotate-180
              transform-origin-center mr-1"
          ></i>
        </span>
        <li
          className={`flex justify-between items-center group cursor-pointer transition ${
            faqguides
              ? "font-medium border border-pink-600 border-b-black border-t-black border-b-2 border-t-2 py-1 pl-2 rounded-br-xl rounded-tl-xl"
              : "text-gray-600 hover:text-black"
          }`}
          onClick={() => {
            setFaqGuides(true);
            setActiveLinkAcc(null);
            setShowHidden(false);
          }}
        >
          <Link to={"faqguides"}>FAQs & Guides</Link>
          <i
            className="fa-solid fa-greater-than text-xs transform transition-all duration-500 ease-in-out group-hover:-rotate-180
              transform-origin-center mr-1"
          ></i>
        </li>
      </div>
    </div>
  );
}

export default LinkAccount;
