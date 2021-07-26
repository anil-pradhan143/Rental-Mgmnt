import React, { useState } from "react";
import { Link } from "react-router-dom";
import Catalog from "../Data/catalog.json";
import history from "../../services/history";
import "./style.css";

export default function Header() {
  const [showBranches, toggleBranches] = useState(false);
  const [showLocations, toggleLocations] = useState(false);

  const [currentLocation, setCurrentLocation] = useState(null);
  const [categories, setCategories] = useState([]);
 

  const getLocationsMenu = () => {
    toggleLocations(!showLocations);
    toggleBranches(false);
  };
  const getCatogories = (e) => {
    const currentLoationPos = parseInt(e.target.id);
    setCategories(Catalog.data.locations[currentLoationPos].branches);
    toggleBranches(true);
    setCurrentLocation(currentLoationPos);
  };

  const getSubCatogories = (e) => {
    const currentbranchPos = parseInt(e.target.id);
    history.push({
      pathname: "/categories",
      state: { location: currentLocation, branch: currentbranchPos },
    });
    getLocationsMenu();
  };

  return (
    <div className="header-container">
      {/* Header start  */}
      <div className="header">
        <div className="header-content">
          <div className="title-header">
            <Link to="/">
              <h3>RENTAL MANAGEMENT SYSTEM</h3>
            </Link>
          </div>
          <div className="location-header">
            <p onClick={getLocationsMenu}>Select Location</p>
          </div>
        </div>
      </div>

      {/* Dropdown start  */}
      <div className="dropdowns">
        {showLocations && (
          <div className="location-ddl">
            {Catalog.data.locations.map((value, index) => {
              return (
                <span
                  id={index}
                  onClick={(e) => {
                    getCatogories(e);
                  }}
                >
                  {value.name}
                </span>
              );
            })}
          </div>
        )}
        {showBranches && (
          <div className="branch-ddl">
            {categories.map((value, index) => {
              return (
                <span
                  id={index}
                  value={value.name}
                  onClick={(e) => {
                    getSubCatogories(e);
                  }}
                >
                  {value.name}
                </span>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer start */}
      <div className="footer"></div>
    </div>
  );
}
