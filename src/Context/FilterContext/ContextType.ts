export type priceRangeType = {
  minPrice: number;
  maxPrice: number;
};

export type filterInitialStateType = {
  byRating: number;
  applySearch: string;
  byPriceRange: priceRangeType;
  byCategories: string[];
};

export type FilterAction =
  | {
      type: "FILTER_BY_PRICE";
      payload: priceRangeType;
    }
  | {
      type: "FILTER_BY_RATING";
      payload: number;
    }
  | {
      type: "FILTER_BY_CATEGORIES";
      payload: string;
    }
  | {
      type: "FILTER_BY_SEARCH";
      payload: string;
    }
  | {
      type: "RESET_FILTERS";
      payload: null;
    };

export type FilterContextType = {
  filterState: filterInitialStateType;
  filterDispatch: (action: FilterAction) => void;
};
