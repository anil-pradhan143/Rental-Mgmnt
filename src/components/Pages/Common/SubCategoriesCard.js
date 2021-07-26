import React, { useEffect } from "react";
import { ProductList } from "./cardStyle";
import { useLocation } from "react-router-dom";
import history from "../../../services/history";

export default function SubCategoriesCard(props) {
  const location = useLocation();
  console.log(props.data);
  return (
    <ProductList>
      {props.data.subcategories.map((subCategoryData, index) => {
        return (
          <li key={subCategoryData.name}>
            <img
              src={`/category/subcategory/${subCategoryData.image}`}
              alt={subCategoryData.name}
            />

            <span id={index}>
              {subCategoryData.name}
              <i className="fa fa-caret-right"></i>
            </span>
          </li>
        );
      })}
    </ProductList>
  );
}
