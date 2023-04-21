import { createContext, useContext, useState, useReducer } from "react";
import { ProductReducer } from "./ProductReducer";
import React from "react";
import { ContextType, InitialStateType } from "./ContextType";

export const ProductDataContext = createContext<ContextType>({} as ContextType);

interface Props {
  children: React.ReactNode;
}
export const ProductDataProvider: React.FC<Props> = ({ children }) => {
  const initialState: InitialStateType = {
    allProducts: [],
    suggestedProducts: [],
    trendProducts: [],
  };
  const [productState, productDispatch] = useReducer(
    ProductReducer,
    initialState
  );

  return (
    <ProductDataContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductDataContext.Provider>
  );
};

export const useProductData = () => useContext(ProductDataContext);
