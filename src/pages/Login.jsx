import { useState } from "react";
import { assets } from "../assets/assets";
import AuthLayout from "../layouts/AuthLayout";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Toggle between Login & Sign Up (UI only)
  const [state, setState] = useState("Login");
  const navigate = useNavigate()
  const handleForgotPassword = ()=>{
    navigate('/reset-password/email') 
  }

  return (
    <AuthLayout>
      <div className="relative flex w-full items-center min-h-screen lg:px-24">
        {/* Auth Card */}
        <div className="w-full sm:w-96 bg-slate-900 p-10 rounded-lg shadow-lg text-indigo-300 text-sm">
          {/* Title */}
          <h2 className="mb-3 text-3xl font-semibold text-center text-white">
            {state === "Login" ? "Login" : "Create account"}
          </h2>

          {/* Subtitle */}
          <p className="mb-6 text-center text-sm">
            {state === "Login"
              ? "Login to your account!"
              : "Create your account"}
          </p>

          {/* Form (UI only) */}
          <form>
            {/* Full Name (Sign Up only) */}
            {state === "Sign Up" && (
              <div className="mb-5 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
                <img src={assets.person_icon} alt="User Icon" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-transparent outline-none text-white/70 w-full"
                />
              </div>
            )}

            {/* Email */}
            <div className="mb-5 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
              <img src={assets.mail_icon} alt="Email Icon" />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent outline-none text-white/70 w-full"
              />
            </div>

            {/* Password */}
            <div className="mb-5 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
              <img src={assets.lock_icon} alt="Password Icon" />
              <input
                type="password"
                placeholder="Password"
                className="bg-transparent outline-none text-white/70 w-full"
              />
            </div>

            {/* Forgot Password (Login only) */}
            {state === "Login" && (
              <p
                onClick={handleForgotPassword}
                className="mb-5 text-indigo-500 text-right cursor-pointer"
              >
                Forgot password?
              </p>
            )}

            {/* Button */}
            <button
              type="button"
              className="w-full py-2.5 rounded-full bg-indigo-500 text-white font-medium"
            >
              {state}
            </button>
          </form>

          {/* Toggle Text */}
          {state === "Login" ? (
            <p className="mt-4 text-center text-xs text-gray-400">
              Don't have an account?{" "}
              <span
                onClick={() => setState("Sign Up")}
                className="cursor-pointer text-blue-400 underline"
              >
                Sign up
              </span>
            </p>
          ) : (
            <p className="mt-4 text-center text-xs text-gray-400">
              Already have an account?{" "}
              <span
                onClick={() => setState("Login")}
                className="cursor-pointer text-blue-400 underline"
              >
                Login
              </span>
            </p>
          )}
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
