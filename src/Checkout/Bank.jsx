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
  },
  {
    id: "b2",
    bank: ChipMong,
  },
  {
    id: "b3",
    bank: ACLEDA,
  },
  {
    id: "b4",
    bank: CrditCard,
  },
  {
    id: "b5",
    bank: CashOnDelivery,
  },
];
function Bank() {
  const [bank, setBank] = useState([]);
  const { userAccount, currentAccount, handleBanks } = useControlData();
  useEffect(() => {
    const userIndex = userAccount.find(
      (check) => check.id === currentAccount.id
    );
    const filterBank = userIndex?.banks;
    setBank(filterBank);
  }, [userAccount]);
  return (
    <div className="flex flex-col gap-2 mt-2">
      {banks.map((render) => (
        <div
          className="flex items-center gap-4 py-1 cursor-pointer"
          key={render?.id}
          onClick={() => handleBanks(render)}
        >
          <label htmlFor="checkBank">
            <input
              className="w-[17px] h-[17px] accent-pink-500 cursor-pointer"
              type="checkbox"
              name="checkBank"
              id="checkBank"
              checked={render?.id == bank?.id}
              onChange={() => handleBanks(render)}
            />
          </label>
          <div className="">
            <img className="w-60 h-10" src={render?.bank} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Bank;
