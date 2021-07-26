import React from "react";
import { ProductList } from "./cardStyle";


export default function SubCategoriesCard(props) {
  
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
