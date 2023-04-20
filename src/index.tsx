import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ProductDataProvider } from "./Context/ProductsDataContext/ProductDataProvider";
import { FilterProvider } from "./Context/FilterContext/FilterProvider";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <ProductDataProvider>
          <App />
        </ProductDataProvider>
      </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
