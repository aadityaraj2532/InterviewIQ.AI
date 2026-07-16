import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsRobot } from "react-icons/bs";
import { RiSparkling2Fill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { motion } from "motion/react";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";

import { auth, provider } from "../utils/firebase";
import { ServerUrl } from "../App";
import { setUserData } from "../redux/userSlice";

function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleAuth = async () => {
    if (isLoading) return;

    setIsLoading(true);
    setError("");

    try {
      // Google Authentication
      const response = await signInWithPopup(auth, provider);

      const user = response.user;

      const name = user.displayName;
      const email = user.email;

      // Send user data to backend
      const result = await axios.post(
        `${ServerUrl}/api/auth/google`,
        { name, email },
        { withCredentials: true }
      );

      // Save user in Redux
      dispatch(setUserData(result.data.user || result.data));

      // Redirect to Home
      navigate("/");
    } catch (error) {
      console.error("Authentication Error:", error);

      switch (error.code) {
        case "auth/cancelled-popup-request":
          setError("Authentication was cancelled.");
          break;

        case "auth/popup-closed-by-user":
          setError("Popup was closed before completing sign in.");
          break;

        case "auth/network-request-failed":
          setError("Network error. Please check your internet connection.");
          break;

        case "auth/internal-error":
          setError("Internal authentication error. Please try again.");
          break;

        default:
          setError(error.response?.data?.message || error.message || "Something went wrong.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f3f3f3] flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-md p-8 rounded-3xl bg-white shadow-2xl border border-gray-200"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="bg-black text-white p-2 rounded-lg">
            <BsRobot size={18} />
          </div>

          <h2 className="font-semibold text-lg">InterviewIQ.AI</h2>
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold text-center leading-snug mb-4">
          Continue with{" "}
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full inline-flex items-center gap-2">
            <RiSparkling2Fill size={16} />
            AI Smart Interview
          </span>
        </h1>

        <p className="text-gray-500 text-center text-sm md:text-base leading-relaxed mb-8">
          Sign in to start AI-powered mock interviews, track your progress,
          and unlock detailed performance insights.
        </p>

        {error && (
          <div className="mb-5 rounded-lg border border-red-300 bg-red-50 p-3">
            <p className="text-center text-sm text-red-600">{error}</p>
          </div>
        )}

        <motion.button
          onClick={handleGoogleAuth}
          disabled={isLoading}
          whileHover={!isLoading ? { scale: 1.03 } : {}}
          whileTap={!isLoading ? { scale: 0.97 } : {}}
          className="w-full flex items-center justify-center gap-3 rounded-full bg-black py-3 text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              Signing in...
            </>
          ) : (
            <>
              <FcGoogle size={22} />
              Continue with Google
            </>
          )}
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Auth;