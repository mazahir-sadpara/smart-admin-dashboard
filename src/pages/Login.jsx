import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import AuthLayout from "../layouts/AuthLayout";
import axios from "axios";
import { toast } from "react-toastify";
/**
 * Login Component
 * Handles both Login and Sign Up UI using a single state
 */
const Login = () => {
  const navigate = useNavigate();

  const { backendUrl, setIsLoggedIn } = useContext(AppContext);

  // State to toggle between "Sign Up" and "Login"
  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async(e)=>{
    try {
      e.preventDefault()

      axios.defaults.withCredentials = true

      if(state === 'Sign Up'){
        const {data} = await axios.post(backendUrl + '/api/auth/register', {name, email, password})
        if(data.success) {
          setIsLoggedIn(true)
          navigate('/')
        } else {
          toast.error(data.message)
        }

      } else {
                const {data} = await axios.post(backendUrl + '/api/auth/login', {email, password})
        if(data.success) {
          setIsLoggedIn(true)
          navigate('/')
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(data.message)
    }
  }

  return (
    <AuthLayout>
      <div className="flex items-center min-h-screen lg:px-26">
        {/* Logo (Top Left) */}
        <h2 className="absolute top-5 left-5 cursor-pointer">LOGO</h2>

        {/* Auth Card */}
        <div className="w-full sm:w-96 bg-slate-900 p-10 rounded-lg shadow-lg text-indigo-300 text-sm">
          {/* Title */}
          <h2 className="mb-3 text-3xl font-semibold text-center text-white">
            {state === "Sign Up" ? "Create account" : "Login"}
          </h2>

          {/* Subtitle */}
          <p className="mb-6 text-center text-sm">
            {state === "Sign Up"
              ? "Create your account"
              : "Login to your account!"}
          </p>

          {/* Form */}
          <form onSubmit={onSubmitHandler}>
            {/* Full Name (Only for Sign Up) */}
            {state === "Sign Up" && (
              <div className="mb-5 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
                <img src={assets.person_icon} alt="User Icon" />
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Full Name"
                  required
                  className="bg-transparent outline-none text-white/70 w-full"
                />
              </div>
            )}

            {/* Email Field */}
            <div className="mb-5 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
              <img src={assets.mail_icon} alt="Email Icon" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
                required
                className="bg-transparent outline-none text-white/70 w-full"
              />
            </div>

            {/* Password Field */}
            <div className="mb-5 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
              <img src={assets.lock_icon} alt="Password Icon" />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                required
                className="bg-transparent outline-none text-white/70 w-full"
              />
            </div>

            {/* Forgot Password */}
            <p
              onClick={() => navigate("/reset-password")}
              className="mb-5 text-indigo-500 cursor-pointer text-right"
            >
              Forgot password?
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2.5 rounded-full bg-indigo-500 text-white font-medium"
            >
              {state}
            </button>
          </form>

          {/* Toggle Between Login & Sign Up */}
          {state === "Sign Up" ? (
            <p className="mt-4 text-center text-xs text-gray-400">
              Already have an account?{" "}
              <span
                onClick={() => setState("Login")}
                className="cursor-pointer text-blue-400 underline"
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="mt-4 text-center text-xs text-gray-400">
              Don't have an account?{" "}
              <span
                onClick={() => setState("Sign Up")}
                className="cursor-pointer text-blue-400 underline"
              >
                Sign up
              </span>
            </p>
          )}
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
