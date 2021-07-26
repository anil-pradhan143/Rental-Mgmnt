import React, { useState, useEffect } from "react";
import "./style.css";

export default function Welcome() {
  return (
    <div className="container">
      <div className="welcome-page">
        <span>Welcome to</span>
        <span>Rental Management System</span>
        <p>Please Select Location</p>
      </div>
    </div>
  );
}
