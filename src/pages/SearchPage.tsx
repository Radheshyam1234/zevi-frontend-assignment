import React from "react";
import { useParams } from "react-router-dom";

import "./SearchPage.css";
import SearchResults from "../components/SearchResults/SearchResults";
import Filters from "../components/Filters/Filters";

type Props = {};

const SearchPage = (props: Props) => {
  const category = useParams();
  return (
    <div className="search-page-container">
      <div className="search-page-filter-container">
        <Filters />
      </div>
      <div className="search-page-results-container">
        <SearchResults />
      </div>
    </div>
  );
};

export default SearchPage;
