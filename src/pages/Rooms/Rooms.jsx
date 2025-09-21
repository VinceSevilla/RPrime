import React from "react";
import { useNavigate } from "react-router-dom";
import images from "../../assets/images/images";

const Rooms = ({ token }) => {
  const navigate = useNavigate();

  const rooms = [
    {
      name: "Deluxe Room",
      img: images.room1,
      price: "₱5,000 / night",
      desc: "A spacious room with a queen-sized bed, city views, and premium amenities for a relaxing and comfortable stay. Perfect for solo travelers or couples seeking elegance.",
    },
    {
      name: "Premier Room",
      img: images.Premier,
      price: "₱7,000 / night",
      desc: "Elegant comfort with modern interiors, a king-sized bed, and upgraded amenities. Ideal for guests who want luxury without compromise.",
    },
    {
      name: "Presidential Suite",
      img: images.Presidential,
      price: "₱15,000 / night",
      desc: "The ultimate in luxury. Grand suite with panoramic views, private jacuzzi, exclusive services, and exquisite interior design for unforgettable stays.",
    },
    {
      name: "Premier Deluxe",
      img: images.Deluxe,
      price: "₱6,000 / night",
      desc: "Perfect blend of luxury and affordability. Includes a queen-sized bed, modern design, and cozy ambiance for guests looking for style and comfort.",
    },
    {
      name: "Family Suite",
      img: images.Sea,
      price: "₱10,000 / night",
      desc: "Spacious suite designed for families, with multiple beds, a separate living area, and kid-friendly amenities to ensure a memorable family getaway.",
    },
    {
      name: "Honeymoon Suite",
      img: images.Garden,
      price: "₱12,000 / night",
      desc: "Romantic suite for couples, featuring a king-sized bed, private balcony, jacuzzi, and mood lighting for the ultimate romantic experience.",
    },
  ];

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  const handleNavClick = (section) => {
    if (section === "Home") navigate("/homepage");
    else if (section === "Restaurant") navigate("/restaurants");
    else if (section === "Events") navigate("/events");
    else alert(`Navigating to ${section}`);
  };

  const handleLearnMore = (name) => {
    navigate(`/book/${encodeURIComponent(name)}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex flex-wrap justify-between items-center px-5 py-4 bg-[#2c3e50] text-white z-10">
        <h2
          className="text-xl font-bold tracking-wide cursor-pointer"
          onClick={() => navigate("/homepage")}
        >
          RPrime
        </h2>

        <div className="flex flex-1 justify-center gap-6 flex-wrap">
          {["Home", "Restaurant", "Events"].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="text-white font-semibold px-2 py-1 rounded hover:bg-yellow-400 hover:text-black transition"
            >
              {item}
            </button>
          ))}
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-600 px-3 py-2 rounded font-semibold hover:bg-red-700 transition"
        >
          Logout
        </button>
      </nav>

      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-[60vh] flex flex-col justify-center items-center text-center pt-20"
        style={{ backgroundImage: `url(${images.Presidential})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-2xl px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Our Luxury Rooms</h1>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            Choose the perfect stay that fits your comfort and budget.
          </p>
        </div>
      </header>

      {/* Rooms Section */}
      <section className="flex justify-center px-5 py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
          {rooms.map((room, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition w-full"
            >
              <img
                src={room.img}
                alt={room.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 text-justify">
                <h3 className="text-xl font-bold text-[#2c3e50] mb-3 text-center">
                  {room.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {room.desc}
                </p>
                <span className="block font-bold text-gray-800 mb-4 text-center">
                  {room.price}
                </span>
                <div className="flex justify-center">
                  <button
                    onClick={() => handleLearnMore(room.name)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 rounded-lg shadow-lg transition"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
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
              title="rooms-location"
            ></iframe>
          </div>
        </div>
        <p className="text-center">© 2025 RPrime | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Rooms;
