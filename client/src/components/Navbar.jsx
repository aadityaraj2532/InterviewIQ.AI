import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BsRobot } from "react-icons/bs";
import { RiCoinsFill } from "react-icons/ri";
import { FaUserAstronaut, FaHistory, FaSignOutAlt } from "react-icons/fa";
import axios from "axios";
import { setUserData } from "../redux/userSlice";
import { ServerUrl } from "../App";

function Navbar() {
    const { userData } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showCreditPopup, setShowCreditPopup] = useState(false);
    const [showUserPopup, setShowUserPopup] = useState(false);

    const handleLogout = async () => {
        try {
            await axios.get(`${ServerUrl}/api/auth/logout`, { withCredentials: true });
            dispatch(setUserData(null));
            setShowUserPopup(false);
            navigate("/");
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <div className="bg-[#f3f3f3] flex justify-center px-4 pt-6">
            <div className="w-full max-w-6xl bg-white rounded-[24px] shadow-sm border border-gray-200 px-8 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">
                    <div className="bg-black text-white p-2 rounded-lg">
                        <BsRobot size={18} />
                    </div>

                    <h2 className="text-lg font-semibold">InterviewIQ.AI</h2>
                </Link>

                {/* Right Side */}
                <div className="flex items-center gap-6">
                    {/* Credits */}
                    {userData && (
                        <div className="relative">
                            <button
                                onClick={() => {
                                    setShowCreditPopup(!showCreditPopup);
                                    setShowUserPopup(false);
                                }}
                                className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition"
                            >
                                <RiCoinsFill className="text-yellow-500" size={20} />
                                <span>{userData.credits || 0}</span>
                            </button>

                            {showCreditPopup && (
                                <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-200 rounded-xl shadow-lg p-4 z-50">
                                    <h3 className="font-semibold mb-2">Credits</h3>

                                    <p className="text-sm text-gray-600">
                                        Available Credits:
                                        <span className="font-semibold ml-1">
                                            {userData.credits || 0}
                                        </span>
                                    </p>

                                    <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                                        Buy Credits
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* User */}
                    <div className="relative">
                        <button
                            onClick={() => {
                                setShowUserPopup(!showUserPopup);
                                setShowCreditPopup(false);
                            }}
                            className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-semibold"
                        >
                            {userData ? (
                                userData.name?.charAt(0).toUpperCase()
                            ) : (
                                <FaUserAstronaut size={18} />
                            )}
                        </button>

                        {showUserPopup && (
                            <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 overflow-hidden">
                                {userData ? (
                                    <>
                                        {/* User Info */}
                                        <div className="px-5 py-4 border-b">
                                            <h3 className="font-semibold">{userData.name}</h3>
                                            <p className="text-sm text-gray-500">
                                                {userData.email}
                                            </p>
                                        </div>

                                        {/* Menu */}
                                        <div className="py-2">
                                            <Link
                                                to="/interview-history"
                                                onClick={() => setShowUserPopup(false)}
                                                className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100 transition"
                                            >
                                                <FaHistory />
                                                <span>Interview History</span>
                                            </Link>

                                            <button
                                                onClick={handleLogout}
                                                className="w-full flex items-center gap-3 px-5 py-3 text-red-500 hover:bg-red-50 transition"
                                            >
                                                <FaSignOutAlt />
                                                <span>Logout</span>
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <div className="p-4">
                                        <Link
                                            to="/auth"
                                            onClick={() => setShowUserPopup(false)}
                                            className="block text-center bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                                        >
                                            Login
                                        </Link>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;