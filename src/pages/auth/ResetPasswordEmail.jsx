import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import { assets } from "../../assets/assets";

const ResetPasswordEmail = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);

    // UI flow only
    navigate("/reset-password/otp", { state: { email } });
  };

  return (
    <AuthLayout>
      <div className="relative flex w-full items-center min-h-screen lg:px-24">
        {/* Auth Card */}
        <div className="w-full sm:w-96 bg-slate-900 p-10 rounded-lg shadow-lg text-indigo-300 text-sm">
          
          {/* Title */}
          <h2 className="mb-3 text-3xl font-semibold text-center text-white">
            Reset Password
          </h2>

          {/* Subtitle */}
          <p className="mb-6 text-center text-sm">
            Enter your email to receive an OTP
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-6 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
              <img src={assets.mail_icon} alt="Email Icon" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
                className="bg-transparent outline-none text-white/70 w-full"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-2.5 rounded-full bg-indigo-500 text-white font-medium"
            >
              Send OTP
            </button>
          </form>

          {/* Back to Login */}
          <p className="mt-4 text-center text-xs text-gray-400">
            Remember your password?{" "}
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

export default ResetPasswordEmail;
