import { FilterAction, filterInitialStateType } from "./ContextType";

export const FilterReducer = (
  state: filterInitialStateType,
  { type, payload }: FilterAction
) => {
  switch (type) {
    case "FILTER_BY_PRICE":
      return {
        ...state,
        byPriceRange: payload,
      };
    case "FILTER_BY_CATEGORIES": {
      return state.byCategories.includes(payload)
        ? {
            ...state,

            byCategories: state.byCategories.filter(
              (item: any) => item !== payload
            ),
          }
        : {
            ...state,

            byCategories: state.byCategories.concat(payload),
          };
    }
    case "FILTER_BY_RATING":
      return {
        ...state,
        byRating: payload,
      };
    case "FILTER_BY_SEARCH":
      return {
        ...state,
        applySearch: payload,
      };

    case "RESET_FILTERS":
      return {
        ...state,
        byRating: 0,
        applySearch: "",
        byPriceRange: {
          minPrice: 0,
          maxPrice: 0,
        },
        byCategories: [],
      };
    default:
      return state;
  }
};
