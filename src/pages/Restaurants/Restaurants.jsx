import React from "react";
import { useNavigate } from "react-router-dom";
import images from "../../assets/images/images";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Restaurants = ({ token }) => {
  const navigate = useNavigate();

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
      <Header />

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

      <Footer />
    </div>
  );
};

export default Restaurants;
