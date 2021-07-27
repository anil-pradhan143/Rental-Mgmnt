import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Catalog from "../../Data/catalog.json";
import CategoriesCard from "../Common/CategoriesCard";
import SubCategoriesCard from "../Common/SubCategoriesCard";

export default function Catagories() {
  const location = useLocation();
  const [showCategories, setShowCategories] = useState(true);
  const [cardData, setCardData] = useState(
    Catalog.data.locations[location.state.location].branches[
      location.state.branch
    ]
  );

  const [currentSubCatPos, setCurrentSubCatPos] = useState(0);
  const [subCategoriesName, setSubCategoriesName] = useState("");

  useEffect(() => {
    console.log(location.state);
    setCardData(
      Catalog.data.locations[location.state.location].branches[
        location.state.branch
      ]
    );
    redirectToCategories(true);
  }, [location]);

  const getSubCatogories = (e) => {
    setCurrentSubCatPos(parseInt(e.target.id));
    setSubCategoriesName("/ " + e.target.innerText);
    setShowCategories(false);
  };

  const redirectToCategories = (params) => {
    setShowCategories(params);
    setSubCategoriesName("");
  };

  return (
    <>
      <p
        className="title"
        style={{ fontWeight: 500, paddingLeft: "20px", cursor: "pointer" }}
      >
        <span
          onClick={() => {
            redirectToCategories(true);
          }}
        >
          Equipment Catalog
        </span>
        {subCategoriesName}
      </p>
      {showCategories && (
        <CategoriesCard data={cardData} getSubCatogories={getSubCatogories} />
      )}
      {!showCategories && (
        <SubCategoriesCard
          data={cardData.categories[currentSubCatPos]}
          getSubCatogories={getSubCatogories}
        />
      )}
    </>
  );
}
