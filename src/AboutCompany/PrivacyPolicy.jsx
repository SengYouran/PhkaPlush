import React from "react";
import { Link } from "react-router-dom";
import { useControlData } from "../Context";

const PrivacyPolicy = () => {
  const { policy, setPolicy } = useControlData();
  return (
    <React.Fragment>
      <div
        className={` bg-white fixed mx-6 p-8 rounded-2xl transition-all duration-500 ease-in-out ${
          policy ? "bottom-10 left-0 z-80" : "duration-0 bottom-0 opacity-0 -z-80"
        }`}
      >
        <i
          className="fa-solid fa-xmark text-xl absolute right-6 top-2 cursor-pointer"
          onClick={() => setPolicy(false)}
        ></i>
        <div className="overflow-x-auto max-h-[70vh] border border-gray-300 bg-gray-50 rounded px-4 py-2 flex flex-col gap-4">
          <h2 className="text-xl font-medium">Privacy Policy</h2>

          <p className=" text-[17px] font-[400]">
            Pich Pisey Co., Ltd built this website as a platform to offer beauty
            and skincare products including the Plush 3‑in‑1 Cream Blush Lip
            Eyeshadow, Bikini Cream, and Armpit Cream. This SERVICE is provided
            by Pich Pisey Co., Ltd at no cost and is intended for use as is.
          </p>

          <p className=" text-[16px]">
            This page is used to inform visitors regarding our policies with the
            collection, use, and disclosure of personal information if anyone
            decides to use our Service.
          </p>

          <p className=" text-[16px]">
            By using our Service, you agree to the collection and use of
            information in accordance with this policy. The personal information
            that we collect is used to provide and improve the Service. We will
            not use or share your information with anyone except as described in
            this Privacy Policy.
          </p>

          <h2 className="text-[16px] font-bold">
            Information Collection and Use
          </h2>
          <p className="font-medium">
            We may collect the following information:
          </p>
          <ul className="ml-4 list-disc pl-4 space-y-2">
            <li>Your name and contact details (email, phone number)</li>
            <li>Delivery address</li>
            <li>Login and profile information</li>
            <li>Location (for delivery purposes)</li>
            <li>Device and browser type</li>
            <li>Usage data and analytics</li>
          </ul>

          <h2 className="text-[16px] font-bold">Log Data</h2>
          <p className=" text-[16px]">
            Whenever you visit our Service, we may collect Log Data such as your
            IP address, browser type, pages visited, time and date of visit, and
            device identifiers.
          </p>

          <h2 className="text-[16px] font-bold mt-6">Cookies</h2>
          <p className=" text-[16px]">
            We use cookies and similar technologies to enhance your experience.
            You can choose to disable cookies in your browser, but some features
            may not function properly.
          </p>

          <h2 className="text-[16px] font-bold">Third-party Services</h2>
          <p className="font-medium">We may use third-party services to:</p>
          <ul className="ml-4 list-disc pl-4 space-y-2">
            <li>Host our website</li>
            <li>Process payments</li>
            <li>Provide delivery/logistics</li>
            <li>Analyze usage (e.g., Google Analytics, Facebook Pixel)</li>
          </ul>
          <p className="text-[16px]">
            These providers may have access to your personal data only to
            perform tasks on our behalf and are required not to use it for any
            other purpose.
          </p>

          <h2 className="text-[16px] font-bold">Security</h2>
          <p className="text-[16px]">
            We value your trust in providing us your personal information. While
            we use commercially acceptable means to protect it, we cannot
            guarantee absolute security.
          </p>

          <h2 className="text-[16px] font-bold">Children’s Privacy</h2>
          <p className="text-[16px]">
            Our services are not intended for individuals under the age of 13.
            We do not knowingly collect information from children under 13. If
            we become aware, we will delete such data immediately.
          </p>

          <h2 className="text-[16px] font-bold">Third-party Links</h2>
          <p>
            Our website may contain links to third-party sites. We are not
            responsible for the content or privacy practices of those sites.
            Please review their policies before providing any personal data.
          </p>

          <h2 className="text-[16px] font-bold">
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time. Updates will be
            posted on this page with the “effective date” below.
          </p>
          <p>
            <strong>Effective Date:</strong> 2025-09-19
          </p>

          <h2 className="text-[16px] font-bold">Contact Us</h2>
          <p>If you have any questions or concerns, please contact us at:</p>
          <ul>
            <li>
              Email:{" "}
              <a
                href="mailto:support@pichpiseybeauty.com"
                className="border-b border-pink-500 text-pink-600 hover:border-pink-700 hover:text-pink-700 transition"
              >
                support@pichpiseybeauty.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <h2>Phone: +855 71-935-0335</h2>
              <div className="border w-[2px] h-[20px] bg-black"></div>
              <span className="flex items-center gap-2">
                <i className="fa-brands fa-telegram text-sky-500"></i>
                <a href="https://t.me/phkaofficial">Telegram link</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black opacity-40 ${
          policy ? "block z-70" : "hidden -z-70"
        }`}
        onClick={() => setPolicy(false)}
      ></div>
    </React.Fragment>
  );
};

export default PrivacyPolicy;
