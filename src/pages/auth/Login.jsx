import { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import AuthLayout from "../../layouts/AuthLayout";
import { useNavigate } from "react-router-dom";
import { login, signup, getCurrentUser } from "../../fakeDB/auth";
import { toast } from "react-toastify";

const Login = () => {
  // Toggle between Login & Sign Up
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      navigate("/");
    }
  }, [navigate]);

  const handleForgotPassword = () => {
    navigate('/reset-password/email');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (state === "Login") {
      const result = login(email, password);
      if (result.success) {
        toast.success(result.message);
        navigate("/");
      } else {
        toast.error(result.message);
      }
    } else {
      if (!name.trim()) {
        toast.error("Please enter your name");
        return;
      }
      const result = signup(name, email, password);
      if (result.success) {
        toast.success(result.message);
        navigate("/");
      } else {
        toast.error(result.message);
      }
    }
  };

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

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Full Name (Sign Up only) */}
            {state === "Sign Up" && (
              <div className="mb-5 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
                <img src={assets.person_icon} alt="User Icon" />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent outline-none text-white/70 w-full"
              />
            </div>

            {/* Password */}
            <div className="mb-5 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
              <img src={assets.lock_icon} alt="Password Icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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
              type="submit"
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
