import React, { useEffect, useState } from "react";
import ABA from "../assets/logo/aba-pay-web.png";
import ChipMong from "../assets/logo/chip-mong-bank.png";
import ACLEDA from "../assets/logo/xpay.png";
import CrditCard from "../assets/logo/credit-debit-card.png";
import CashOnDelivery from "../assets/logo/cod-kh-en.png";
import { useControlData } from "../Context";
const banks = [
  {
    id: "b1",
    bank: ABA,
    name_bank: "ABA",
  },
  {
    id: "b2",
    bank: ChipMong,
    name_bank: "ChipMong",
  },
  {
    id: "b3",
    bank: ACLEDA,
    name_bank: "ACLEDA",
  },
  {
    id: "b4",
    bank: CrditCard,
    name_bank: "Credit card",
  },
  {
    id: "b5",
    bank: CashOnDelivery,
    name_bank: "Cash on delivery",
  },
];
function Bank() {
  const [bank, setBank] = useState(null); // ✅ Start with null, not []
  const { userAccount, currentAccount, handleBanks } = useControlData();

  useEffect(() => {
    const userIndex = userAccount.find(
      (check) => check.id === currentAccount.id
    );
    const filterBank = userIndex?.banks;
    setBank(filterBank ?? null); // fallback to null if undefined
  }, [userAccount]);

  return (
    <div className="flex flex-col gap-2 mt-2">
      {banks.map((render) => (
        <div
          className="flex items-center gap-4 py-1 cursor-pointer"
          key={render.id}
          onClick={() => handleBanks(render)}
        >
          <label htmlFor={`checkBank-${render.id}`}>
            <input
              id={`checkBank-${render.id}`}
              name="checkBank"
              type="checkbox"
              className="w-[17px] h-[17px] accent-pink-500 cursor-pointer"
              checked={render.id === bank?.id}
              onChange={() => handleBanks(render)}
            />
          </label>
          <div>
            <img
              className="w-60 h-10"
              src={render?.bank}
              alt={render?.name_bank}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Bank;
