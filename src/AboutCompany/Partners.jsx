import React from "react";

const Partners = () => {
  return (
    <div className="map-container" style={{ textAlign: "center", padding: "40px 0" }}>
      <h2>Store Location</h2>
      <iframe
        title="Store Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.948725887145!2d104.88852787505458!3d11.5106506886365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519f66a5c087%3A0xa495f39e8d8abff6!2sPich%20Pisey%20Shop!5e0!3m2!1sen!2skh!4v1698672954489!5m2!1sen!2skh"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Partners;
