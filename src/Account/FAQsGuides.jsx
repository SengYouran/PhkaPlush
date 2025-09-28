import React, { useState } from "react";
import { useControlData } from "../Context";

function FAQsGuides() {
  const { showHidden, policy, setPolicy } = useControlData();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenOrder, setIsOpenOrder] = useState(false);
  const [isOpenPay, setIsOpenPay] = useState(false);
  const [isOpenDelivery, setIsOpenDelivery] = useState(false);
  const [isOpenExchange, setIsOpenExchange] = useState(false);
  const [isOpenRefund, setIsOpenRefund] = useState(false);
  const [isOpenPurchase, setIsOpenPurchase] = useState(false);
  const [isOpenContactUs, setIsOpenContactUs] = useState(false);

  return (
    <div
      className={`md:w-[73%] md:ml-[27%] mt-4 min-h-[70vh] ${
        showHidden ? "hidden md:block" : "block"
      }`}
    >
      <h2 className="text-center text-xl font-medium">FAQs & Guides</h2>
      <div className="flex flex-col gap-2 px-4 mt-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <h2 className="text-[18px] font-medium">General Info</h2>
              <i
                className={`fa-solid ${
                  isOpen ? "fa-minus" : "fa-plus"
                } transition-all duration-300 text-sm`}
              ></i>
            </div>

            {/* Collapsible Content */}
            <div
              className={`overflow-hidden transition-[max-height]  duration-900 ease-in-out ${
                isOpen ? "max-h-[500px]" : " max-h-[0]"
              }`}
            >
              <h2 className="text-[15px] font-medium mt-2">
                When are new items available?
              </h2>
              <p className="text-[15px] font-[400] mt-2 leading-6">
                We add new items every Monday to Saturday, including skincare,
                beauty, and personal care favorites.
                <p className="text-[15px] font-[400]">
                  Be sure to check back regularly — some styles sell out fast!
                </p>
              </p>
              <p className="mt-2 text-[15px] text-gray-700">
                If you’re an existing customer of{" "}
                <span className="font-bold">PICH PISEY</span>, you can register
                online using your phone number to unlock special member prices —
                just like in-store
              </p>
              <p className="mt-2 text-[15px] text-gray-700">
                Make sure to use the{" "}
                <span className="font-medium">same number</span> you used when
                shopping offline.
              </p>
              <h2 className="text-[15px] font-medium mt-2">
                What brands or products are available online?
              </h2>
              <p className="text-[15px] text-gray-700 my-2">
                We carry a carefully selected range of beauty and skincare
                products under the <span className="font-bold">PICH PISEY</span>{" "}
                line — including creams, floral scents, intimate care, and more.
              </p>
              <p className="text-[15px] font-[400] mt-2 leading-6">
                Some items are available online only, so don’t miss your chance
                to grab them!
              </p>
            </div>
          </div>
          <div className="border border-gray-200"></div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpenPay(!isOpenPay)}
            >
              <h2 className="text-[18px] font-medium">Payment Methods</h2>
              <i
                className={`fa-solid ${
                  isOpenPay ? "fa-minus" : "fa-plus"
                } transition-all duration-300 text-sm`}
              ></i>
            </div>
          </div>
          <div
            className={`overflow-hidden transition-[max-height]  duration-900 ease-in-out ${
              isOpenPay ? "max-h-[500px]" : " max-h-[0]"
            }`}
          >
            <h2 className="text-[16px] font-medium mt-2">How do I pay?</h2>
            <p className="text-[15px] mt-1">
              We provide multiple payment options
            </p>
            <ul className=" list-decimal pl-4 text-sm">
              <li>Credit / Debit Card (Visa and Master Card)</li>
              <li>ABA Payway, Acleda Payway, Chipmong Bank Payway, .....</li>
              <li>Bank Transfer (TT)</li>
              <li>COD (Cash on Delivery)</li>
            </ul>
          </div>
          <div className="border border-gray-200"></div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpenDelivery(!isOpenDelivery)}
            >
              <h2 className="text-[18px] font-medium">Delivery</h2>
              <i
                className={`fa-solid ${
                  isOpenDelivery ? "fa-minus" : "fa-plus"
                } transition-all duration-300 text-sm`}
              ></i>
            </div>
          </div>
          <div
            className={`overflow-hidden transition-[max-height]  duration-900 ease-in-out ${
              isOpenDelivery ? "max-h-[500px]" : " max-h-[0]"
            }`}
          >
            <h2 className="text-[16px] font-medium mt-2">
              What is the delivery option?
            </h2>
            <ul className=" list-decimal pl-4 text-sm mt-1">
              <li>What is the delivery option?</li>
              <li>
                To provinces, you can pick up your order at the courier office.
              </li>
            </ul>
            <h2 className="text-[16px] font-medium mt-2">
              How long does it take to receive my order?
            </h2>
            <ul className=" list-decimal pl-4 text-sm mt-1">
              <li>For Phnom Penh, We will deliver within 48 hours.</li>
              <li>For Provinces, We will deliver within 72 hours.</li>
              <p>
                Please note that during peak seasonal sales our deliveries may
                be delayed. Should this be the case our team will contact you
                with further info.
              </p>
            </ul>
            <h2 className="text-[16px] font-medium mt-2">
              How much will shipping cost?
            </h2>
            <ul className="list-decimal pl-4 text-sm mt-1">
              <li>
                <span className="text-[15px] text-red-500">$1.25</span> delivery
                to 25 provinces and cities
              </li>
            </ul>
            <h2 className="text-[16px] font-medium mt-2">
              What shipping companies do we use?
            </h2>
            <ul className="list-decimal pl-4 text-sm mt-1">
              <li>
                In Phnom Penh city, for short distance in the city center we use
                our own delivery man that is fast and convenient.
              </li>
              <li>
                To province, we cooperate with Virak Buntham and J&T. We also
                can deliver your order by another courier up on your request.
              </li>
            </ul>
          </div>
          <div className="border border-gray-200"></div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpenExchange(!isOpenExchange)}
            >
              <h2 className="text-[18px] font-medium">Exchange & Returns</h2>
              <i
                className={`fa-solid ${
                  isOpenExchange ? "fa-minus" : "fa-plus"
                } transition-all duration-300 text-sm`}
              ></i>
            </div>
          </div>
          <div
            className={`overflow-hidden transition-[max-height]  duration-900 ease-in-out ${
              isOpenExchange ? "max-h-[500px]" : " max-h-[0]"
            }`}
          >
            <h2 className="text-[16px] font-medium mt-2">
              What is the delivery option?
            </h2>
            <ul className="text-sm list-decimal pl-4 mt-1">
              <li>
                <span className="text-[15px] font-bold">
                  You aren't in Phnom Penh:
                </span>{" "}
                You aren't in Phnom Penh: contact our customer service then
                choose a shipping courier near you. Please note that you will
                responsible for the shipping fee both way.
              </li>
              <li>
                <span className="text-[15px] font-bold">
                  You are Phnom Penh:
                </span>
                <ul className="text-sm list-decimal pl-4 mt-1">
                  <li>Go to PICH PISEY Platform then "My Orders"</li>
                  <li>Choose the order you want to exchange</li>
                  <li>Choose items you want to exchange</li>
                  <li>
                    Once finished add new item to your shopping cart and then
                    checkout.
                  </li>
                  <p>
                    <span className="text-[15px] font-bold">Remark:</span> you
                    can find your returned items in the shopping cart. Driver
                    will deliver new item to you and collect returned item back.
                  </p>
                </ul>
              </li>
            </ul>
            <h2 className="text-[16px] font-medium mt-2">
              If my order eligible to be exchanged?
            </h2>
            <ul className="text-sm list-decimal pl-4 mt-1">
              <li>Eligible to exchange in 14 days after purchase date</li>
              <li>
                Item must be in their original condition, unworn, unaltered, and
                unwashed with all tags attached.
              </li>
              <li>
                For hygienic purposes, the following products are
                non-returnable: swimwear, lingerie, sock, towel, glove, blanket,
                mattress, earrings and other accessories
              </li>
            </ul>
          </div>
          <div className="border border-gray-200"></div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpenOrder(!isOpenOrder)}
            >
              <h2 className="text-[18px] font-medium">Order Status</h2>
              <i
                className={`fa-solid ${
                  isOpenOrder ? "fa-minus" : "fa-plus"
                } transition-all duration-300 text-sm`}
              ></i>
            </div>
            <div
              className={`overflow-hidden transition-[max-height]  duration-900 ease-in-out ${
                isOpenOrder ? "max-h-[500px]" : " max-h-[0]"
              }`}
            >
              <h2 className="text-[16px] font-medium mt-2">
                How do I check my order status?
              </h2>
              <p className="text-[15px] mt-2 text-gray-700">
                You can track your order directly through the{" "}
                <span className="font-bold">PICH PISEY</span> platform to see
                whether your order has been:
              </p>
              <ul className="list-disc pl-4 space-y-2 text-gray-700 text-sm">
                <li>Confirmed</li>
                <li>Packed</li>
                <li>Delivered</li>
                <li>Or Rejected</li>
              </ul>
              <h2 className="text-[16px] font-medium mt-2">Please note</h2>
              <p className="text-[15px] text-gray-700">
                At the moment, we do not offer real-time delivery tracking, as
                our current courier does not yet support this feature.
              </p>
              <p className="text-[15px] text-gray-700">
                If your order takes longer than 3 days, please contact our
                customer service for quick support.
              </p>
              <p className="text-[15px] mt-1">
                We're here to make sure every order gets to you safely — with
                love from <span className="font-bold">PICH PISEY</span>
              </p>
            </div>
          </div>
          <div className="border border-gray-200"></div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpenRefund(!isOpenRefund)}
            >
              <h2 className="text-[18px] font-medium">Refund</h2>
              <i
                className={`fa-solid ${
                  isOpenRefund ? "fa-minus" : "fa-plus"
                } transition-all duration-300 text-sm`}
              ></i>
            </div>
          </div>
          <div
            className={`overflow-hidden transition-[max-height]  duration-900 ease-in-out ${
              isOpenRefund ? "max-h-[500px]" : " max-h-[0]"
            }`}
          >
            <h2 className="text-[16px] font-medium mt-2">
              What are the refund options?
            </h2>
            <ul className="text-sm list-decimal pl-4 mt-1">
              <li>
                <span className="text-[15px] font-bold">
                  You aren't in Phnom Penh:
                </span>{" "}
                Contact our customer service then choose a shipping courier near
                you.
              </li>
              <li>
                <span className="text-[15px] font-bold">
                  You are Phnom Penh:
                </span>
                <ul className="text-sm list-decimal pl-4 mt-1">
                  <li>Go to PICH PISEY Platform then "My Orders"</li>
                  <li>Choose the order you want to refund</li>
                  <li>Choose items</li>
                  <li>Choose a refund method (Credit Card or Bank Transfer)</li>
                  <li>Book refund</li>
                </ul>
              </li>
              <li>
                Our team will review your returned items and process the refund.
              </li>
            </ul>
            <h2 className="text-[16px] font-medium">
              How long will refund take?
            </h2>
            <p className="text-[15px]">
              After we receive returned items, It may take 2 weeks to process
              the refund.
            </p>
            <h2 className="text-[16px] font-medium">
              How do I check my return status?
            </h2>
            <p className="text-[15px]">
              You may check return status in "My Returns"
            </p>
            <h2 className="text-[16px] font-medium">
              If my order eligible to be refunded?
            </h2>
            <ul className="text-sm list-decimal pl-4 mt-1">
              <li>Eligible to return in 14 days after purchase date</li>
              <li>Returns must be in their original condition, Not used</li>
              <li className="text-red-500">
                Items purchased on SALE cannot be refunded and are only eligible
                for exchange.
              </li>
            </ul>
          </div>
          <div className="border border-gray-200"></div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpenPurchase(!isOpenPurchase)}
            >
              <h2 className="text-[18px] font-medium">Purchase</h2>
              <i
                className={`fa-solid ${
                  isOpenPurchase ? "fa-minus" : "fa-plus"
                } transition-all duration-300 text-sm`}
              ></i>
            </div>
          </div>
          <div
            className={`overflow-hidden transition-[max-height]  duration-900 ease-in-out ${
              isOpenPurchase ? "max-h-[500px]" : " max-h-[0]"
            }`}
          >
            <h2 className="text-[16px] font-medium mt-2">
              Where can I make an order?
            </h2>
            <ul className="text-sm list-decimal pl-4">
              <li>
                Order from our website:{" "}
                <a
                  className="border-b text-red-500"
                  href="https://phka-plush.vercel.app/"
                >
                  phka-plush.vercel.app
                </a>
              </li>
              <li>
                Order from plateform:{" "}
                <a
                  href="https://web.facebook.com/phka.official/?_rdc=1&_rdr#"
                  className="text-[#1877F2] font-bold"
                >
                  Facebook
                </a>{" "}
                ,
                <a
                  href="https://www.tiktok.com/@phka.official"
                  className="font-bold"
                >
                  Tik Tok{" "}
                </a>
                ,{" "}
                <a
                  href="https://www.instagram.com/phka.official/"
                  className="text-[#E1306C] font-bold"
                >
                  Instagram
                </a>
                ,{" "}
                <a
                  href="https://t.me/phkaofficial"
                  className="text-[#0088CC] font-bold"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
          <div className="border border-gray-200"></div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpenContactUs(!isOpenContactUs)}
            >
              <h2 className="text-[18px] font-medium">Contact Us</h2>
              <i
                className={`fa-solid ${
                  isOpenContactUs ? "fa-minus" : "fa-plus"
                } transition-all duration-300 text-sm`}
              ></i>
            </div>
          </div>
          <div
            className={`overflow-hidden transition-[max-height]  duration-900 ease-in-out ${
              isOpenContactUs ? "max-h-[500px]" : " max-h-[0]"
            }`}
          >
            <h2 className="text-[16px] font-medium mt-2">
              Live Chat:{" "}
              <a
                href="https://web.facebook.com/phka.official/?_rdc=1&_rdr#"
                className="text-[#1877F2] font-bold"
              >
                Facebook
              </a>
              ,{" "}
              <a
                href="https://www.tiktok.com/@phka.official"
                className="font-bold"
              >
                Tik Tok
              </a>
              ,{" "}
              <a
                href="https://www.instagram.com/phka.official/"
                className="text-[#E1306C] font-bold"
              >
                Instagram
              </a>{" "}
              or <a href="https://phka-plush.vercel.app/">Our Website</a>
            </h2>
            <h2 className="text-[16px] font-medium mt-2">
              Email:{" "}
              <a
                href="mailto:support@pichpiseybeauty.com"
                className="text-red-500 border-b"
              >
                {" "}
                support@pichpiseybeauty.com
              </a>
            </h2>
            <h2 className="text-[16px] font-medium mt-2">
              Phone:
              <ul className="text-sm list-disc pl-4">
                <li>071-935-0335</li>
              </ul>
            </h2>
            <h2 className="text-[16px] font-medium mt-2 ">
              Telegram:{" "}
              <a
                href="https://t.me/phkaofficial"
                className="text-[15px] border-b font-[400]"
              >
                https://t.me/phkaofficial
              </a>
            </h2>
            <h2 className="text-[15px] mt-2">Monday - Sunday, 9AM - 8PM</h2>
          </div>
          <div className="border border-gray-200"></div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setPolicy(!policy)}
            >
              <h2 className="text-[18px] font-medium">Privacy Policy</h2>
              <i
                className={`fa-solid ${
                  policy ? "fa-minus" : "fa-plus"
                } transition-all duration-300 text-sm`}
              ></i>
            </div>
          </div>
          <div className="border border-gray-200"></div>
        </div>
      </div>
    </div>
  );
}

export default FAQsGuides;
