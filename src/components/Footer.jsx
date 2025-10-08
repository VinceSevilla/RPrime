import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2c3e50] text-white px-5 py-10 mt-auto">
      <div className="flex flex-wrap justify-center gap-6 mb-5">
        <div className="min-w-[200px] text-left">
          <h3 className="font-bold text-lg mb-2">Contact Us</h3>
          <p>RPrime, 123 Luxury Ave, Metro City, Philippines</p>
          <p>Email: info@rprime.com</p>
          <p>Phone: +63 912 345 6789</p>
        </div>
        <div className="w-full max-w-[250px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.089762764651!2d121.03687281483917!3d14.5903838898499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b83e8d5e29b7%3A0x6e1a7e2c3a734bc5!2sManila%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sus!4v1693069210451!5m2!1sen!2sus"
            width="100%"
            height="150"
            className="rounded"
            allowFullScreen=""
            loading="lazy"
            title="hotel-location"
          ></iframe>
        </div>
      </div>
      <p className="text-center">© 2025 RPrime | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
