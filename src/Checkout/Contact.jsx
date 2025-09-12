import React, { useEffect, useState } from "react";
import { useControlData } from "../Context";
const contacts = [
  {
    id: "c1",
    via: "Phone Call",
    icon: "fa-solid fa-phone",
  },
  {
    id: "c2",
    via: "Telegram",
    icon: "fa-brands fa-telegram",
  },
  {
    id: "c3",
    via: "WhatsApp",
    icon: "fa-brands fa-whatsapp",
  },
];
function Contact() {
  const [contact, setContact] = useState([]);
  const [phone, setPhone] = useState(null);
  const { userAccount, currentAccount, handleContact } = useControlData();
  useEffect(() => {
    const userIndex = userAccount.find(
      (check) => check.id === currentAccount.id
    );
    const shippingAddress = userIndex?.shippingAddress;
    const filtercontact = userIndex?.contactVia;
    setContact(filtercontact);
    setPhone(shippingAddress);
  }, [userAccount]);
  return (
    <div className="bg-white mt-4 py-8 px-3 rounded">
      <div className=" flex items-center gap-4">
        {contacts.map((render) => (
          <div
            className="flex items-center gap-2 cursor-pointer"
            key={render?.id}
            onClick={() => handleContact(render)}
          >
            <label htmlFor="contactDelivery">
              <input
                className=" accent-pink-500 w-[15px] h-[15px] cursor-pointer mt-.5"
                type="checkbox"
                name="contactDelivery"
                id="contactDelivery"
                checked={render?.id == contact?.id}
                onChange={() => handleContact(render)}
              />
            </label>
            <span className="flex items-center gap-2 border border-gray-300 py-1 px-2 rounded">
              <i className={`${render?.icon} text-sm`}></i>
              <h2 className="text-sm">{render?.via}</h2>
            </span>
          </div>
        ))}
      </div>
      <form>
        <input
          className="border border-black rounded w-full mt-4 h-[2.5rem] outline-0 pl-4"
          type="text" name="phoneDeliverys" value={phone?.telephone} readOnly
        />
      </form>
    </div>
  );
}

export default Contact;
