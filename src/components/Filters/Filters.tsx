import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import { useFilterData } from "../../Context/FilterContext/FilterProvider";
import { categories, ratings, priceRanges } from "../../utilities/utilityData";

import "./Filters.css";

type Props = {};

const Filters = (props: Props) => {
  const [openBrandFilter, setOpenBrandFilter] = useState(true);
  const [openPriceFilter, setOpenPriceFilter] = useState(true);
  const [openRatingsFilter, setOpenRatingsFilter] = useState(true);

  const { filterState, filterDispatch } = useFilterData();

  console.log(filterState);

  return (
    <div className="filters-container">
      <p className="filter-header">Search Results</p>

      <p
        className="reset-filters"
        onClick={() => {
          filterDispatch({ type: "RESET_FILTERS", payload: null });
        }}
      >
        Reset Filters
      </p>

      <div className="brand-filters-container">
        <div
          className="brand-filter-top-header"
          onClick={() => {
            setOpenBrandFilter(!openBrandFilter);
          }}
        >
          <p>BRAND</p>
          <div>
            {openBrandFilter ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
          </div>
        </div>

        <div className="filter-values">
          {openBrandFilter &&
            categories.map((category) => {
              return (
                <div
                  className="filter"
                  onClick={(e) => {
                    filterDispatch({
                      type: "FILTER_BY_CATEGORIES",
                      payload: category,
                    });
                  }}
                >
                  <input
                    type="checkbox"
                    className="checkbox-field"
                    checked={filterState.byCategories.includes(category)}
                  />
                  {category}
                </div>
              );
            })}
        </div>
      </div>

      <div className="brand-filters-container">
        <div
          className="brand-filter-top-header"
          onClick={() => {
            setOpenPriceFilter(!openPriceFilter);
          }}
        >
          <p>PRICE RANGE</p>
          <div>
            {openPriceFilter ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
          </div>
        </div>

        <div className="filter-values">
          {openPriceFilter &&
            priceRanges.map(({ minPrice, maxPrice }) => {
              return (
                <div
                  className="filter"
                  onClick={(e) => {
                    filterDispatch({
                      type: "FILTER_BY_PRICE",
                      payload: {
                        minPrice,
                        maxPrice,
                      },
                    });
                  }}
                >
                  <input
                    type="radio"
                    className="checkbox-field"
                    name="sort-price"
                    checked={
                      filterState.byPriceRange.minPrice == minPrice &&
                      filterState.byPriceRange.maxPrice == maxPrice
                    }
                  />
                  {!minPrice ? <p className="">Under {maxPrice}</p> : null}
                  {minPrice && maxPrice ? (
                    <p className="">
                      {minPrice} To {maxPrice}
                    </p>
                  ) : null}
                  {!maxPrice ? <p className="">Above {minPrice}</p> : null}
                </div>
              );
            })}
        </div>
      </div>

      <div className="brand-filters-container">
        <div
          className="brand-filter-top-header"
          onClick={() => {
            setOpenRatingsFilter(!openRatingsFilter);
          }}
        >
          <p>Ratings</p>
          <div>
            {openRatingsFilter ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
          </div>
        </div>

        <div className="filter-values">
          {openRatingsFilter &&
            ratings.map(({ item, value }) => {
              return (
                <div
                  className="filter"
                  onClick={(e) => {
                    filterDispatch({
                      type: "FILTER_BY_RATING",
                      payload: value,
                    });
                  }}
                >
                  <input
                    type="radio"
                    className="checkbox-field"
                    name="rating"
                    checked={filterState.byRating == value}
                  />
                  <span className="star-icon">{item}</span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Filters;
