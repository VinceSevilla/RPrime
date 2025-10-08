import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigate('/');
  };

  const handleNavClick = (section) => {
    if (section === "Rooms" || section === "Home") navigate("/rooms");
    else if (section === "Restaurant") navigate("/restaurants");
    else if (section === "Events") navigate("/events");
  };

  return (
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
  );
};

export default Header;
