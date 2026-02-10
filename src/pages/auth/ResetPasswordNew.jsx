import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import { assets } from "../../assets/assets";

const ResetPasswordNew = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("New password set for:", email);

    // UI flow only
    navigate("/login");
  };

  return (
    <AuthLayout>
      <div className="relative flex w-full items-center min-h-screen lg:px-24">
        {/* Auth Card */}
        <div className="w-full sm:w-96 bg-slate-900 p-10 rounded-lg shadow-lg text-indigo-300 text-sm">
          
          {/* Title */}
          <h2 className="mb-3 text-3xl font-semibold text-center text-white">
            Set New Password
          </h2>

          {/* Subtitle */}
          <p className="mb-6 text-center text-sm">
            Create a strong password for your account
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* New Password */}
            <div className="mb-5 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
              <img src={assets.lock_icon} alt="Password Icon" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="New Password"
                className="bg-transparent outline-none text-white/70 w-full"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-6 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
              <img src={assets.lock_icon} alt="Confirm Password Icon" />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm Password"
                className="bg-transparent outline-none text-white/70 w-full"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-2.5 rounded-full bg-indigo-500 text-white font-medium"
            >
              Update Password
            </button>
          </form>

          {/* Back to Login */}
          <p className="mt-4 text-center text-xs text-gray-400">
            Password updated?{" "}
            <span
              onClick={() => navigate("/login")}
              className="cursor-pointer text-blue-400 underline"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ResetPasswordNew;
