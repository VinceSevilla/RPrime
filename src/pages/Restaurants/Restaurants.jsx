import React from "react";
import { useNavigate } from "react-router-dom";
import images from "../../assets/images/images";

const Restaurants = ({ token }) => {
  const navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem("token");
    navigate("/");
  }

  function handleNavClick(section) {
    if (section === "Rooms") navigate("/rooms");
    if (section === "Home") navigate("/homepage");
    else alert(`Navigating to ${section}`);
  }

  function handleLearnMore(name) {
    navigate(`/restaurants/${encodeURIComponent(name)}`);
  }

  const restaurants = [
    {
      name: "Skyline Dining",
      img: images.restaurant1,
      desc: "An extraordinary fine dining experience high above the city with panoramic skyline views. Enjoy a curated menu of international gourmet dishes prepared by world-class chefs. Perfect for romantic evenings, celebrations, or business dinners."
    },
    {
      name: "Sea Breeze Café",
      img: images.restaurant2,
      desc: "A serene seaside café where guests can relax to the sound of waves and ocean breeze. Featuring fresh seafood, tropical cocktails, and seasonal specialties in a casual yet elegant setting. Ideal for brunches, lunches, or sunset dinners."
    },
    {
      name: "Golden Dragon",
      img: images.restaurant3,
      desc: "Authentic Asian cuisine reimagined with modern presentation. From dim sum to stir-fried entrées, every dish balances flavor, aroma, and texture. A refined setting for both casual dining and special occasions."
    },
    {
      name: "Steakhouse Prime",
      img: images.restaurant4,
      desc: "The ultimate destination for steak lovers, offering premium cuts cooked to perfection. Rustic charm blends with modern elegance, complemented by a fine wine selection. Ideal for intimate dinners or celebrations."
    },
    {
      name: "Garden Bistro",
      img: images.restaurant5,
      desc: "A tranquil retreat surrounded by greenery, serving fresh farm-to-table cuisine. Seasonal ingredients and artisanal preparations highlight flavor and freshness. Perfect for brunch, lunch, or casual dinners."
    },
    {
      name: "Dessert Haven",
      img: images.restaurant6,
      desc: "A paradise for sweet lovers, offering artisanal cakes, pastries, and confections made fresh daily. Cozy décor and a charming atmosphere make it perfect for friends and families to indulge."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white fixed w-full z-10 flex-wrap">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold tracking-wide cursor-pointer" onClick={() => navigate("/homepage")}>
            RPrime
          </h2>
        </div>
        <div className="flex flex-1 justify-center gap-8 flex-wrap">
          {["Home", "Rooms", "Events"].map((item) => (
            <button
              key={item}
              className="px-3 py-1 rounded-md font-semibold hover:bg-yellow-400 hover:text-black transition-all text-lg"
              onClick={() => handleNavClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex items-center">
          <button
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md font-semibold transition"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="relative flex justify-center items-center h-[90vh] bg-center bg-cover pt-20"
        style={{ backgroundImage: `url(${images.restaurant1})` }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-5xl font-bold mb-4 text-white">Our Restaurants</h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            Enjoy world-class dining experiences — from casual cafés to fine dining, each crafted to delight your senses.
          </p>
        </div>
      </header>

      {/* Restaurants Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-10 p-10 bg-white">
        {restaurants.map((rest, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              src={rest.img}
              alt={rest.name}
              className="w-full h-64 object-cover transition-transform duration-400 hover:scale-105"
            />
            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{rest.name}</h3>
              <p className="text-gray-600 text-sm mb-4 text-justify">{rest.desc}</p>
              <button
                className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all"
                onClick={() => handleLearnMore(rest.name)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center bg-gray-800 text-white p-6 mt-auto">
        <p>© 2025 RPrime | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Restaurants;
