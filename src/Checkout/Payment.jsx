import React, { useEffect, useState } from "react";
import { useControlData } from "../Context";
import CheckoutSuccess from "./CheckoutSuccess";

function Payment() {
  const [total, setTotal] = useState(null);
  const [amountPayment, setAmountPayment] = useState(null);
  const [saveMoney, setSaveMoney] = useState(null);
  const [KHRTotal, setKHRTotal] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false); // <-- add this
  const { userAccount, currentAccount, handleCheckoutClearStoreBags } =
    useControlData();
  const delivery = 1.25;

  useEffect(() => {
    const userIndex = userAccount.find(
      (check) => check.id === currentAccount.id
    );
    const storeBag = userIndex?.storeBags || [];

    let totalPrice = 0;
    let totalDiscountAmount = 0;

    storeBag.forEach((item) => {
      if (!item || !item.product_price) return;
      const pricePerItem = parseFloat(item.product_price.replace("$", ""));
      const quantity = item.counter || 1;
      const discountRat =
        parseFloat(item.discount?.replace("%", "")) / 100 || 0;
      const itemTotal = pricePerItem * quantity;
      totalPrice += itemTotal;
      const discountAmount = itemTotal * discountRat;
      totalDiscountAmount += discountAmount;
    });

    const positiveValue = Math.abs(totalDiscountAmount);
    const priceAfterDiscount = totalPrice - positiveValue;
    const deliveryFee = totalPrice >= 50 ? 0 : delivery;
    const amountPayment = priceAfterDiscount + deliveryFee;
    const khmerMoneyRaw = Math.round(amountPayment * 4000);
    const KHR = new Intl.NumberFormat("km-KH").format(khmerMoneyRaw) + "៛";

    setTotal(priceAfterDiscount.toFixed(2));
    setSaveMoney(positiveValue.toFixed(2));
    setAmountPayment(amountPayment.toFixed(2));
    setKHRTotal(KHR);
  }, [userAccount]);

  const user = userAccount.find((check) => check.id === currentAccount.id);
  const banks = user?.banks || null;
  const contactVia = user?.contactVia || null;

  return (
    <div className="relative">
      <div className="border border-gray-200 h-2 bg-gray-200 rounded mt-4"></div>
      <div className="mt-2.5 mx-2.5 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h2 className="text-[17px] font-medium">Total</h2>
          <p className="text-[17px] font-medium">${total}</p>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-[17px] ">Save</h2>
          <p className="text-[17px] ">${saveMoney}</p>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-[17px] ">Delivery</h2>
          <p className={`text-[15px] ${total >= 50 ? " line-through" : ""}`}>
            ${delivery}
          </p>
        </div>
        <div className="border opacity-30"></div>
        <div className="flex justify-between items-center font-bold">
          <h2 className="text-[18px]">Amount to pay</h2>
          <span>
            <p className="text-[18px]">${amountPayment}</p>
            <p className="text-[18px]">{KHRTotal}</p>
          </span>
        </div>
      </div>

      <button
        className="text-[17px] text-white font-bold cursor-pointer bg-black py-2 w-full rounded mt-3"
        onClick={() => {
          if (!banks || !contactVia) {
            alert("Please select payment method and contact method first.");
            return;
          }

          handleCheckoutClearStoreBags();

          // ✅ Instead of navigate, show success screen
          setShowSuccess(true);
        }}
      >
        Checkout
      </button>

      {showSuccess && (
        <div className="fixed inset-0 z-50">
          <CheckoutSuccess />
        </div>
      )}
    </div>
  );
}

export default Payment;
