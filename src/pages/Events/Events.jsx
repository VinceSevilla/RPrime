import React from "react";
import { useNavigate } from "react-router-dom";
import images from '../../assets/images/images';

const Event = ({ token }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigate('/');
  };

  const handleNavClick = (section) => {
    if (section === "Rooms") navigate("/rooms");
    else if (section === "Restaurant") navigate("/restaurants");
    else if (section === "Events") navigate("/events");
    else alert(`Navigating to ${section}`);
  };

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
              title="hotel-location"
            ></iframe>
          </div>
        </div>
        <p className="text-center">© 2025 RPrime | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Event;
