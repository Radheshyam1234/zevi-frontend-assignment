import { ProductType } from "../../utilities/dataTypes";

export type InitialStateType = {
  allProducts: ProductType[];
  suggestedProducts: ProductType[];
  trendProducts: ProductType[];
};

export type ContextType = {
  productState: InitialStateType;
  productDispatch: (action: ProductAction) => void;
};

export type ProductAction =
  | {
      type: "SET_ALL_PRODUCTS";
      payload: ProductType[];
    }
  | {
      type: "SET_SUGGESTED_PRODUCTS";
      payload: ProductType[];
    }
  | {
      type: "SET_TREND_PRODUCTS";
      payload: ProductType[];
    };
