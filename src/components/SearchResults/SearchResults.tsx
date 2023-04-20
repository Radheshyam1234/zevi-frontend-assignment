import React, { useEffect } from "react";
import SearchResultCard from "./SearchResultCard";
import { useProductData } from "../../Context/ProductsDataContext/ProductDataProvider";
import { FilteredData } from "./utils/filteredData";
import { useFilterData } from "../../Context/FilterContext/FilterProvider";

type Props = {};

const SearchResults = (props: Props) => {
  const {
    productState: { allProducts },
  } = useProductData();
  const { filterDispatch } = useFilterData();
  return (
    <div className="search-results-card-container">
      {FilteredData(allProducts).length > 0 ? (
        FilteredData(allProducts).map((product) => {
          return <SearchResultCard key={product.id} data={product} />;
        })
      ) : (
        <div className="default-text-container">
          <p>No Products matches your search..</p>
          <p>
            Click on{" "}
            <span
              className="reset-filters"
              onClick={() => {
                filterDispatch({
                  type: "RESET_FILTERS",
                  payload: null,
                });
              }}
            >
              Reset Filters
            </span>{" "}
            to view all products
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
