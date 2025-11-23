import React from "react";
import { useNavigate } from "react-router-dom";
import images from '../../assets/images/images';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Event = ({ token }) => {
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      title: "Ballroom",
      description: "Elegant ballroom venue perfect for formal gatherings, corporate functions, and special celebrations. Features sophisticated décor, spacious layout, and premium amenities for memorable events.",
      image: images.event1,
    },
    {
      id: 2,
      title: "Conference Meeting",
      description: "Modern conference facilities equipped with state-of-the-art technology for business meetings and corporate events. Offers flexible spaces, audiovisual equipment, and professional catering services.",
      image: images.event2,
    },
    {
      id: 3,
      title: "Wedding",
      description: "Beautiful wedding venues with comprehensive planning services for your perfect day. Provides stunning settings, customizable packages, and dedicated coordinators to ensure your dream wedding becomes reality.",
      image: images.event3,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-[50vh] flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: `url(${images.event1})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white animate-fadeIn">
          Upcoming Events
        </h1>
      </header>

      {/* Events Section */}
      <section className="flex justify-center px-5 py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition w-full"
            >
              <img src={event.image} alt={event.title} className="w-full h-60 object-cover" />
              <div className="p-6 text-justify">
                <h3 className="text-xl font-bold text-[#2c3e50] mb-3 text-center">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Event;
