import React, { useState } from "react";
import { useProductData } from "../../Context/ProductsDataContext/ProductDataProvider";
import { ProductType } from "../../utilities/dataTypes";
import { InitialStateType } from "../../Context/ProductsDataContext/ContextType";

import { CiSearch } from "react-icons/ci";
import "./SearchBox.css";
import { useFilterData } from "../../Context/FilterContext/FilterProvider";
import { useNavigate } from "react-router";

const SearchBox = ({ openSuggestionBox, setOpenSuggestionBox }: any) => {
  const { productState } = useProductData();
  const { filterDispatch } = useFilterData();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      if (searchTerm !== "") navigate(`/search/${searchTerm}/${searchTerm}`);
      filterDispatch({
        type: "FILTER_BY_SEARCH",
        payload: searchTerm,
      });
    }
  };

  return (
    <div className="search-box-wrapper">
      <div className="search-box">
        <input
          className="search-box-input"
          placeholder="Search"
          value={searchTerm}
          onClick={() => {
            setOpenSuggestionBox(!openSuggestionBox);
          }}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          onKeyDown={(e) => {
            handleKeyDown(e);
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
