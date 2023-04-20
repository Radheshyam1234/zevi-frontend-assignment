import { InitialStateType, ProductAction } from "./ContextType";

export const ProductReducer = (
  state: InitialStateType,
  { type, payload }: ProductAction
) => {
  switch (type) {
    case "SET_ALL_PRODUCTS":
      return {
        ...state,
        allProducts: payload,
      };
    case "SET_SUGGESTED_PRODUCTS":
      return {
        ...state,
        suggestedProducts: payload,
      };
    case "SET_TREND_PRODUCTS":
      return {
        ...state,
        trendProducts: payload,
      };
    default:
      return { ...state };
  }
};
