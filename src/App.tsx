import React, { useEffect, useState } from "react";
import { useProductData } from "./Context/ProductsDataContext/ProductDataProvider";
import { chooseRandomData } from "./helpers/chooseRandomData";
import appLogo from "./assets/logo-zevi.png";

import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const { productDispatch } = useProductData();
  useEffect(() => {
    (async () => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          productDispatch({
            type: "SET_ALL_PRODUCTS",
            payload: data,
          });
          productDispatch({
            type: "SET_SUGGESTED_PRODUCTS",
            payload: chooseRandomData(data, 5),
          });
          productDispatch({
            type: "SET_TREND_PRODUCTS",
            payload: chooseRandomData(data, 5),
          });
        });
    })();
  }, []);

  return (
    <div className="app">
      <div className="app-logo">
        <img src={appLogo} alt="logo" />
      </div>
      <SearchBox />
    </div>
  );
}

export default App;
