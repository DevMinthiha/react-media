import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ width: "100%", minHeight: "66vh" }}>
      <div className="">
        <h1 className="text-info">404 Not Found</h1>
        <button className="btn btn-danger" onClick={() => navigate("/")}>Go To Home</button>
      </div>
    </div>
  );
};

export default NotFound;
