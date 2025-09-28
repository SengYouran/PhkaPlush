import React from "react";
import Footer from "../Page/Footer";

function AboutUs() {
  return (
    <React.Fragment>
      <div className="px-4 py-10 max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold font-rowdies text-center mb-6 text-pink-700">
          About Us
        </h2>

        {/* Who We Are */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Who We Are
          </h3>
          <p className="text-gray-600 leading-relaxed">
            At <span className="font-semibold text-pink-600">PICH PISEY</span>,
            we're dedicated to providing high-quality skincare solutions that
            make you feel confident and radiant. From nourishing creams to
            multipurpose beauty essentials, we blend affordability with
            performance in every product.
          </p>
        </section>

        {/* Our Products */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Our Products
          </h3>
          <ul className="text-gray-600 list-disc list-inside leading-loose">
            <li>
              <span className="font-medium">Blush 3‑in‑1:</span> Use as a Cream
              Blush, Lip Tint, and Eyeshadow.
            </li>
            <li>
              <span className="font-medium">Bikini Cream:</span> Apply before
              bed to lighten and smooth dark areas.
            </li>
            <li>
              <span className="font-medium">Armpit Cream:</span> Safe overnight
              use to treat underarm darkness and dryness.
            </li>
          </ul>
        </section>

        {/* Quality & Standards */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Quality & Manufacturing
          </h3>
          <p className="text-gray-600 leading-relaxed">
            All our products are manufactured in certified international
            factories, strictly monitored and approved by relevant health
            ministries. We ensure every batch meets international skincare
            safety standards.
          </p>
        </section>

        {/* Pricing & Rewards */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Affordable Pricing & Rewards
          </h3>
          <p className="text-gray-600 leading-relaxed">
            GlowSkin believes in beauty for all — which is why we offer premium
            skincare at fair prices. Orders above{" "}
            <span className="font-bold text-pink-600">$50</span> receive
            exclusive discounts and loyalty points that can be redeemed for
            vouchers or future purchases.
          </p>
        </section>

        {/* Where to Buy */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Where to Buy
          </h3>
          <p className="text-gray-600 leading-relaxed">
            You can find our products at our partner beauty stores across
            Cambodia or visit our flagship office located in Phnom Penh or with
            our partner and you can check our plateform also.
          </p>
          <div className="mt-4 text-gray-700">
            <p className="font-medium">🏢 Main Office:</p>
            <p>
              PICH PISEY Headquarters, Building St 478, & St 155, Phnom Penh
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Need Help?
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Reach out to our customer care team at{" "}
            <a
              href="mailto:support@glowskin.com.kh"
              className="text-pink-600 underline"
            >
              support@pichpiseybeauty.com
            </a>{" "}
            or visit our Help Center for frequently asked questions.
          </p>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default AboutUs;
