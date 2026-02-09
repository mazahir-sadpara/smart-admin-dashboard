import { Navigate, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate()
    // Handler function for button click
  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0">
      {/* Logo */}
      <h2>LOGO</h2>

      {/* Right side */}
   
        <button onClick={handleLoginClick} className="flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 transition-all cursor-pointer">
          Login <img src={assets.arrow_icon} alt="arrow" />
        </button>

    </div>
  );
};

export default Navbar;
