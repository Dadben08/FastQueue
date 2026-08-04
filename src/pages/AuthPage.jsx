import React, { useState, useEffect } from "react";
import SignUpModal from "../components/SignUpModal";
import LoginModal from "../components/LoginModal";
import { useNavigate, useLocation } from "react-router-dom";
import heroBg from "../assets/img/fastqueue.png";

const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(true);

  // Close modal handler
  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/"); // send user back home
  };

  // Detect route change (when going between /signup and /login)
  useEffect(() => {
    setIsModalOpen(true);
  }, [location.pathname]);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroBg})`,
      }}
    >
      {location.pathname === "/signup" && (
        <SignUpModal isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
      {location.pathname === "/login" && (
        <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default AuthPage;
