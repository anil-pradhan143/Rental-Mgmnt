import React, { useEffect } from "react";
import { ProductList } from "./styles";
import { useLocation } from "react-router-dom";
import Catalog from "../../Data/catalog.json";

export default function Catagories() {
  const location = useLocation();

  return (
    <>
      <p className="title" style={{ fontWeight: 500 }}>
        Equipment Catalog
      </p>
      <ProductList>
        {Catalog
          ? Catalog.data.locations[location.state.data].branches.map(
              (product) => {
                return product.categories.map((subCategoryData, index) => (
                  <li key={subCategoryData.name}>
                    <img
                      src={`../category/${subCategoryData.image}`}
                      alt={subCategoryData.name}
                    />

                    <span id={index}>
                      {subCategoryData.name}
                      <i className="fa fa-caret-right"></i>
                    </span>
                  </li>
                ));
              }
            )
          : null}
        <p>{}</p>
      </ProductList>
    </>
  );
}
