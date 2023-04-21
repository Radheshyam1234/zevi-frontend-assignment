import React, { useEffect, useState } from "react";
import { useProductData } from "./Context/ProductsDataContext/ProductDataProvider";
import { chooseRandomData } from "./helpers/chooseRandomData";
import appLogo from "./assets/logo-zevi.png";

import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import Trends from "./components/Trends/Trends";
import SuggestionBox from "./components/SuggestionBox/SuggestionBox";
import { Routes, Route, useLocation } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

function App() {
  const { productDispatch } = useProductData();
  const [openSuggestionBox, setOpenSuggestionBox] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          productDispatch({
            type: "SET_ALL_PRODUCTS",
            payload: data.sort(() => Math.random() - 0.5),
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

  const location = useLocation();

  return (
    <div className="app">
      <div className="app-logo">
        <img src={appLogo} alt="logo" />
      </div>
      <SearchBox
        openSuggestionBox={openSuggestionBox}
        setOpenSuggestionBox={setOpenSuggestionBox}
      />
      {openSuggestionBox && location?.pathname == "/" ? (
        <div className="suggestion-trends-wrapper">
          <div className="suggestion-trends-container">
            <Trends />
            <SuggestionBox />
          </div>
        </div>
      ) : null}
      <Routes>
        <Route path="/search/:category/:productName" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
