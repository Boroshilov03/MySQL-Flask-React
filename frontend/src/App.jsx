import "./App.css";
import HomePage from "./_root/pages/HomePage";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignUp from "./_root/pages/SignUp";
import Home from "./_root/pages/Home";
import RootLayout from "./_root/RootLayout";
import Login from "./_root/pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/login'
    });
  };

  return (
    <Routes>
      {/* Public Routes */}
      <Route path={"/login"} element={<Login setIsAuth={setIsAuth} />} />
      <Route path={"/signup"} element={<SignUp />} />

      {/* Private Routes */}
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
