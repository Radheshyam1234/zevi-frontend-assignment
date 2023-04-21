import { useReducer, createContext, useContext } from "react";
import { FilterContextType, filterInitialStateType } from "./ContextType";
import { FilterReducer } from "./FilterReducer";
import React from "react";
export const FilterContext = createContext<FilterContextType>(
  {} as FilterContextType
);
interface Props {
  children: React.ReactNode;
}

export const FilterProvider: React.FC<Props> = ({ children }) => {
  const filterInitialState: filterInitialStateType = {
    byRating: 0,
    applySearch: "",
    byPriceRange: {
      minPrice: 0,
      maxPrice: 0,
    },
    byCategories: [],
  };

  const [filterState, filterDispatch] = useReducer(
    FilterReducer,
    filterInitialState
  );

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterData = () => useContext(FilterContext);
