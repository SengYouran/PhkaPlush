import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useControlData } from "../Context";

function DetailPurchased() {
  const { id } = useParams();
  const { setDetail, userAccount, currentAccount } = useControlData();
  const [save, setSave] = useState(null);
  const [discount, setDiscount] = useState(null);
  const [bank, setBank] = useState({});
  const [detailProduct, setDetailProduct] = useState({});
  const [address, setAddress] = useState({});
  // 1st useEffect: Load product detail
  useEffect(() => {
    const userIndex = userAccount.find(
      (check) => check.id === currentAccount.id
    );
    const purchased = userIndex?.storepurchased || [];
    const bank = userIndex?.banks;
    const shippingAddress = userIndex?.shippingAddress;
    const getOneProduct = purchased?.find((check) => check.id == id);

    setDetailProduct(getOneProduct);
    setAddress(shippingAddress);
    setBank(bank);
  }, [userAccount, currentAccount, id]);

  // 2nd useEffect: Calculate discount AFTER detailProduct is set
  useEffect(() => {
    if (!detailProduct) return;

    const discountRat =
      parseFloat(detailProduct?.discount?.replace("%", "")) / 100 || 0;
    const totalprice = detailProduct?.totalPrice || 0;
    const discountAmount = totalprice * discountRat;
    const positiveValue = Math.abs(discountAmount);
    const priceAfterDiscount =
      positiveValue > 0 ? totalprice - positiveValue : totalprice;
    const amoutPay = priceAfterDiscount.toFixed(2);

    setDiscount(amoutPay);
    setSave(positiveValue);
  }, [detailProduct]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-center bg-blue-200 w-full py-2 text-[15px]">
        <span className="text-[17px] font-medium text-pink-600">
          Exchange |
        </span>{" "}
        If you're not satisfied with your purchase, you can exchange it for
        free!
      </h2>
      <div className="mt-5 flex justify-between items-center flex-wrap">
        <Link
          to={"/account/orders"}
          className=" border py-2 px-2 w-24 cursor-pointer font-medium"
          onClick={() => setDetail(false)}
        >
          Exit Detail
        </Link>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <h2 className="text-[16px] font-medium">
              Order on. #{detailProduct?.id}
            </h2>
            <span className="flex items-center gap-4 bg-green-200 px-2 py-1">
              <i className="fa-solid fa-circle text-[8px] text-green-500"></i>
              <p className="text-sm text-green-500">Shipped</p>
            </span>
          </div>
          <div className="">
            <h2 className="text-[17px] font-medium">
              {detailProduct?.dateOfPurchasing}
            </h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="sm:w-[60%] border pt-1 px-2">
          <span className="flex items-center gap-4 ">
            <i className="fa-solid fa-bag-shopping -mt-0.5"></i>
            <h2>Order item ({detailProduct?.counter})</h2>
          </span>
          <div className="border-[1px] border-gray-300 mt-1"></div>
          <div className="mt-2 relative">
            <div className="flex gap-2">
              <img className="w-30 h-30" src={detailProduct?.product} alt="" />
              <span className="flex flex-col gap-2">
                <h2>{detailProduct?.product_name}</h2>
                <p className="text-sm">{detailProduct?.product_text}</p>
                <p className="text-sm">Code: {detailProduct?.id}</p>
                <p className="text-sm">Quantity X {detailProduct?.counter}</p>
              </span>
            </div>
            <div className=" text-right mr-2 mb-2">
              <p className={`text-gray-500 ${save > 0 ? " line-through" : ""}`}>
                {detailProduct?.product_price}
              </p>
              {save > 0 ? (
                <p>
                  ({detailProduct?.discount}% off) US ${save}
                </p>
              ) : null}
              <p className="text-[17px] font-medium">${discount}</p>
            </div>
          </div>
        </div>
        <div className="sm:w-[40%] flex flex-col gap-2">
          <div className="border flex flex-col pt-1 px-2">
            <span className="flex items-center gap-4 ">
              <i className="fa-solid fa-sack-dollar -mt-0.5"></i>
              <h2>Order item ({detailProduct?.counter})</h2>
            </span>
            <div className="border-[1px] border-gray-300 mt-1"></div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center mt-1">
                <h2 className="text-[15px] font-medium">Payment method</h2>
                <p className="text-[15px] font-medium">{bank?.name_bank}</p>
              </div>
              <div className="flex justify-between items-center mt-1">
                <h2 className="text-[15px] font-medium">Product price</h2>
                <p className="text-[15px] font-medium">
                  {detailProduct?.product_price}
                </p>
              </div>
              <div className="flex justify-between items-center mt-1">
                <h2 className="text-[15px] font-medium">Delivery Fee</h2>
                <p className="text-[15px] font-medium">$1.25</p>
              </div>
              <div className="flex justify-between items-center mt-1">
                <h2 className="text-[15px] font-medium">Just detailed price</h2>
                <p className="text-[15px] font-medium">/1</p>
              </div>
              <div className="flex justify-between items-center mt-1">
                <h2 className="text-[15px] font-medium">Total price</h2>
                <p className="text-[15px] font-medium">${discount}</p>
              </div>
            </div>
          </div>
          <div className="border flex flex-col pt-1 px-2">
            <span className="flex items-center gap-4 ">
              <i className="fa-solid fa-truck-fast -mt-0.5"></i>
              <h2>Shipping Address</h2>
            </span>
            <div className="border-[1px] border-gray-300 mt-1"></div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 mt-1">
                <i className="fa-solid fa-user"></i>
                <h2 className="text-[15px] font-medium">{address?.fullname}</h2>
              </div>
              <div className="">
                <h2 className="text-[15px] font-medium">SILVER</h2>
              </div>
              <div className="">
                <h2 className="text-[15px] font-medium">
                  {address?.telephone}
                </h2>
              </div>
              <div className="">
                <h2 className="text-[15px] font-medium">
                  {address?.currentAddress}
                </h2>
              </div>
              <div className="">
                <h2 className="text-[15px] font-medium">{address?.province}</h2>
              </div>
              <div className="">
                <h2 className="text-[15px] font-medium">{address?.country}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPurchased;
