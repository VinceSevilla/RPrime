import React from "react";
import { useNavigate } from "react-router-dom";
import images from '../../assets/images/images';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Homepage = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/rooms");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-[60vh] flex flex-col justify-center items-center text-center pt-20"
        style={{ backgroundImage: `url(${images.hotel1})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-3xl px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Welcome to RPrime
          </h1>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            Experience unparalleled luxury and comfort at RPrime. Enjoy elegantly designed rooms, world-class dining, rejuvenating spa treatments, and exceptional services that create memorable stays.
          </p>
          <button
            onClick={handleBookNow}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Book Now
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="flex flex-wrap justify-center gap-6 px-5 py-16 bg-white">
        <div className="max-w-xs bg-gray-100 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition">
          <img src={images.room1} alt="Luxury Rooms" className="w-full h-44 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold text-[#2c3e50] mb-2">Luxury Rooms</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Rooms and suites with breathtaking views, premium bedding, and modern amenities for a relaxing stay.
            </p>
          </div>
        </div>

        <div className="max-w-xs bg-gray-100 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition">
          <img src={images.dining1} alt="Fine Dining" className="w-full h-44 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold text-[#2c3e50] mb-2">Fine Dining</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Enjoy gourmet dishes crafted by expert chefs, from international cuisines to local delicacies.
            </p>
          </div>
        </div>

        <div className="max-w-xs bg-gray-100 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition">
          <img src={images.dining1} alt="Spa & Wellness" className="w-full h-44 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold text-[#2c3e50] mb-2">Spa & Wellness</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Rejuvenate with premium spa and wellness services in a serene and relaxing environment.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
