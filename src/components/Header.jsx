import { assets } from "../assets/assets";
import { getCurrentUser } from "../fakeDB/auth";
import { useEffect, useState } from "react";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
  }, []);

  const userName = user?.name || "Developer";

  return (
    <div className="flex flex-col items-center px-4 text-center">
      {/* Header Image */}
      <div className="mb-6 relative">
        <div className="absolute inset-0 bg-indigo-500 rounded-full blur-2xl opacity-20"></div>
        <img
          src={assets.header_img}
          alt="header image"
          className="w-36 h-36 rounded-full mb-6 relative z-10 border-4 border-indigo-500/30"
        />
      </div>

      {/* Greeting */}
      <h1 className="flex items-center justify-center gap-2 text-xl sm:text-3xl font-medium mb-2 text-white">
        Hey {userName}!{" "}
        <img src={assets.hand_wave} className="w-8 aspect-square" alt="hand wave" />
      </h1>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-5xl font-semibold mb-4 text-white">
        Welcome to our app
      </h2>

      {/* Description */}
      <p className="mb-8 max-w-md text-center text-indigo-300 text-sm sm:text-base">
        Let's start with a quick product tour and we will have you up and running in no time!
      </p>

      {/* Get Started Button */}
      <button className="bg-indigo-500 text-white rounded-full px-8 py-2.5 hover:bg-indigo-600 transition-all font-medium shadow-lg shadow-indigo-500/30">
        Get Started
      </button>
    </div>
  );
};

export default Header;
