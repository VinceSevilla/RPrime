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
    else alert(`Navigating to ${section}`);
  };

  const handleLearnMore = (name) => {
    navigate(`/book/${encodeURIComponent(name)}`);
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Navbar */}
      <nav className="flex flex-wrap justify-between items-center p-4 bg-gray-800 text-white fixed w-full z-10">
        <div className="flex items-center">
          <h2
            className="text-xl font-bold cursor-pointer"
            onClick={() => navigate("/homepage")}
          >
            RPrime
          </h2>
        </div>
        <div className="flex flex-1 justify-center gap-6 flex-wrap">
          {["Home", "Restaurant", "Events"].map((item) => (
            <button
              key={item}
              className="px-3 py-2 font-semibold rounded hover:bg-yellow-400 hover:text-black transition"
              onClick={() => handleNavClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div>
          <button
            className="bg-red-600 px-4 py-2 rounded font-semibold hover:bg-red-700 transition"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="relative flex justify-center items-center h-[90vh] bg-cover bg-center pt-20"
        style={{ backgroundImage: `url(${images.hotel1})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-3xl px-5 text-white">
          <h1 className="text-5xl font-bold mb-4">Our Luxury Rooms</h1>
          <p className="text-lg mb-6">
            Choose the perfect stay that fits your comfort and budget.
          </p>
        </div>
      </header>

      {/* Rooms List */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5 py-16 bg-white justify-center">
        {rooms.map((room, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              src={room.img}
              alt={room.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {room.name}
              </h3>
              <p className="text-gray-600 mb-3 text-sm">{room.desc}</p>
              <span className="block font-bold text-gray-800 mb-4">
                {room.price}
              </span>
              <button
                className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-lg font-bold transition shadow-md"
                onClick={() => handleLearnMore(room.name)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-auto">
        <p>© 2025 RPrime | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Rooms;
