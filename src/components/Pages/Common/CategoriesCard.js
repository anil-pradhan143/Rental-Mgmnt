import React, { useEffect } from "react";
import { ProductList } from "./cardStyle";
import { useLocation } from "react-router-dom";
import history from "../../../services/history";

export default function CategoriesCard(props) {
  const location = useLocation();
  console.log(props.data.categories[0]);
  return (
    <ProductList>
      {props.data.categories.map((categoriesData, index) => {
        return (
          <li key={categoriesData.name}>
            <img
              src={`/category/${categoriesData.image}`}
              alt={categoriesData.name}
            />

            <span
              id={index}
              data={JSON.stringify(categoriesData)}
              onClick={(e) => {
                props.getSubCatogories(e);
              }}
            >
              {categoriesData.name}
              <i className="fa fa-caret-right"></i>
            </span>
          </li>
        );
      })}
    </ProductList>
  );
}
