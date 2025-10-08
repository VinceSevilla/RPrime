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
      title: "Summer Music Festival",
      date: "September 25, 2025",
      description: "Enjoy live performances by top artists and DJs in a vibrant atmosphere.",
      image: images.event1,
    },
    {
      id: 2,
      title: "Wine & Dine Evening",
      date: "October 10, 2025",
      description: "Experience a curated evening of fine wines paired with gourmet dishes.",
      image: images.event2,
    },
    {
      id: 3,
      title: "Spa & Wellness Retreat",
      date: "November 5, 2025",
      description: "Relax and rejuvenate with our premium spa treatments and wellness programs.",
      image: images.event3,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-[50vh] flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: `url(${images.hotel1})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white animate-fadeIn">
          Upcoming Events
        </h1>
      </header>

      {/* Events Section */}
      <section className="flex flex-wrap justify-center gap-6 px-5 py-16">
        {events.map((event) => (
          <div
            key={event.id}
            className="max-w-xs bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition"
          >
            <img src={event.image} alt={event.title} className="w-full h-44 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#2c3e50] mb-2">{event.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{event.date}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{event.description}</p>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Event;
