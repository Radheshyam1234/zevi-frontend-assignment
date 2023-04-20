import React from "react";
import { useNavigate } from "react-router-dom";

import "./SuggestionBox.css";
import { useProductData } from "../../Context/ProductsDataContext/ProductDataProvider";
import { useFilterData } from "../../Context/FilterContext/FilterProvider";

type Props = {};

const SuggestionBox = (props: Props) => {
  const navigate = useNavigate();
  const {
    productState: { suggestedProducts },
  } = useProductData();
  const { filterDispatch } = useFilterData();
  return (
    <div className="suggestion-box-container">
      <div className="suggestion-box-heading">Popular suggestions</div>
      <div className="suggestion-container">
        {suggestedProducts?.map((product) => {
          return (
            <p className="suggestion" key={product.id}>
              {product.title}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(SuggestionBox);
