import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import { assets } from "../../assets/assets";

const ResetPasswordOTP = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OTP entered:", otp);

    // UI flow only
    navigate("/reset-password/new", { state: { email } });
  };

  return (
    <AuthLayout>
      <div className="relative flex w-full items-center min-h-screen lg:px-24">
        {/* Auth Card */}
        <div className="w-full sm:w-96 bg-slate-900 p-10 rounded-lg shadow-lg text-indigo-300 text-sm">
          
          {/* Title */}
          <h2 className="mb-3 text-3xl font-semibold text-center text-white">
            Enter OTP
          </h2>

          {/* Subtitle */}
          <p className="mb-6 text-center text-sm">
            We’ve sent a verification code to your email
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* OTP Input */}
            <div className="mb-6 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
              <img src={assets.lock_icon} alt="OTP Icon" />
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                placeholder="Enter OTP"
                className="bg-transparent outline-none text-white/70 w-full tracking-widest"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-2.5 rounded-full bg-indigo-500 text-white font-medium"
            >
              Verify OTP
            </button>
          </form>

          {/* Helper Text */}
          <p className="mt-4 text-center text-xs text-gray-400">
            Didn’t receive the code?{" "}
            <span className="cursor-pointer text-blue-400 underline">
              Resend OTP
            </span>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ResetPasswordOTP;
