import React from "react";
import { useNavigate } from "react-router-dom";
import images from "../../assets/images/images";

const Restaurants = ({ token }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  const handleNavClick = (section) => {
    if (section === "Rooms") navigate("/rooms");
    else if (section === "Restaurant") navigate("/restaurants");
    else if (section === "Events") navigate("/events");
    else alert(`Navigating to ${section}`);
  };

  const handleLearnMore = (name) => {
    navigate(`/restaurants/${encodeURIComponent(name)}`);
  };

  const restaurants = [
    {
      name: "Skyline Dining",
      img: images.restaurant1,
      desc: "An extraordinary fine dining experience high above the city with panoramic skyline views. Enjoy a curated menu of international gourmet dishes prepared by world-class chefs. Perfect for romantic evenings, celebrations, or business dinners.",
    },
    {
      name: "Sea Breeze Café",
      img: images.restaurant2,
      desc: "A serene seaside café where guests can relax to the sound of waves and ocean breeze. Featuring fresh seafood, tropical cocktails, and seasonal specialties in a casual yet elegant setting. Ideal for brunches, lunches, or sunset dinners.",
    },
    {
      name: "Golden Dragon",
      img: images.restaurant3,
      desc: "Authentic Asian cuisine reimagined with modern presentation. From dim sum to stir-fried entrées, every dish balances flavor, aroma, and texture. A refined setting for both casual dining and special occasions.",
    },
    {
      name: "Steakhouse Prime",
      img: images.restaurant4,
      desc: "The ultimate destination for steak lovers, offering premium cuts cooked to perfection. Rustic charm blends with modern elegance, complemented by a fine wine selection. Ideal for intimate dinners or celebrations.",
    },
    {
      name: "Garden Bistro",
      img: images.restaurant5,
      desc: "A tranquil retreat surrounded by greenery, serving fresh farm-to-table cuisine. Seasonal ingredients and artisanal preparations highlight flavor and freshness. Perfect for brunch, lunch, or casual dinners.",
    },
    {
      name: "Dessert Haven",
      img: images.restaurant6,
      desc: "A paradise for sweet lovers, offering artisanal cakes, pastries, and confections made fresh daily. Cozy décor and a charming atmosphere make it perfect for friends and families to indulge.",
    },
  ];

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
          {["Rooms", "Restaurant", "Events"].map((item) => (
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
        style={{ backgroundImage: `url(${images.food1})` }}  
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-3xl px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Our Restaurants</h1>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            Enjoy world-class dining experiences — from casual cafés to fine dining,
            each crafted to delight your senses.
          </p>
        </div>
      </header>

      {/* Restaurants Section */}
      <section className="flex justify-center px-5 py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
          {restaurants.map((rest, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition w-full"
            >
              <img
                src={rest.img}
                alt={rest.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 text-justify">
                <h3 className="text-xl font-bold text-[#2c3e50] mb-3 text-center">
                  {rest.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {rest.desc}
                </p>
                <div className="flex justify-center">
                  <button
                    onClick={() => handleLearnMore(rest.name)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 rounded-lg shadow-lg transition"
                  >
                    Learn More
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
              title="restaurant-location"
            ></iframe>
          </div>
        </div>
        <p className="text-center">© 2025 RPrime | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Restaurants;
