import React, { useState } from "react";
import { useProductData } from "../../Context/ProductsDataContext/ProductDataProvider";
import { ProductType } from "../../utilities/dataTypes";
import { InitialStateType } from "../../Context/ProductsDataContext/ContextType";

import { CiSearch } from "react-icons/ci";
import "./SearchBox.css";
import { useFilterData } from "../../Context/FilterContext/FilterProvider";

const SearchBox = () => {
  const { productState } = useProductData();
  const { filterDispatch } = useFilterData();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search-box-wrapper">
      <div className="search-box">
        <input
          className="search-box-input"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        ></input>
        <div
          className="search-box-icon"
          onClick={() => {
            filterDispatch({
              type: "FILTER_BY_SEARCH",
              payload: searchTerm,
            });
          }}
        >
          <CiSearch
            style={{
              height: "30px",
              width: "30px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
