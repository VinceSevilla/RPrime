import React from "react";
import { useNavigate } from "react-router-dom";
import images from "../../assets/images/images";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Rooms = () => {
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


  const handleLearnMore = (name) => {
    navigate(`/book/${encodeURIComponent(name)}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

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

      <Footer />
    </div>
  );
};

export default Rooms;
