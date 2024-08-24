import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, []);

  return <></>;
};

export default Logout;
