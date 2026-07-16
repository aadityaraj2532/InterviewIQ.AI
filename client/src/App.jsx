import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { setUserData } from "./redux/userSlice";

export const ServerUrl = "http://localhost:8080";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `${ServerUrl}/api/user/current-user`,
          {
            withCredentials: true,
          }
        );

        dispatch(setUserData(response.data));
      } catch (error) {
        console.error(error.response?.data || error.message);
        dispatch(setUserData(null));
      }
    };

    getUser();
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;