import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { getCurrentUser, logout } from "../fakeDB/auth";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
  }, []);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    toast.success("Logged out successfully");
    navigate('/login');
  };

  return (
    <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-8 bg-slate-900 border-b border-slate-700">
      {/* Left side - Menu toggle and Logo */}
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-semibold text-white">LOGO</h2>
      </div>

      {/* Right side */}
      {user ? (
        <div className="flex items-center gap-4">
          <span className="text-indigo-300 text-sm hidden sm:block">Welcome, {user.name}</span>
          <button 
            onClick={handleLogout} 
            className="flex items-center gap-2 bg-[#333A5C] rounded-full px-6 py-2.5 text-indigo-300 hover:bg-indigo-500 hover:text-white transition-all cursor-pointer"
          >
            Logout <img src={assets.arrow_icon} alt="arrow" className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button 
          onClick={handleLoginClick} 
          className="flex items-center gap-2 bg-[#333A5C] rounded-full px-6 py-2.5 text-indigo-300 hover:bg-indigo-500 hover:text-white transition-all cursor-pointer"
        >
          Login <img src={assets.arrow_icon} alt="arrow" className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
