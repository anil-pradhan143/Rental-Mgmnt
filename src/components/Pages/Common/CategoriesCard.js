import React from "react";
import { ProductList } from "./cardStyle";


export default function CategoriesCard(props) {
 
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
