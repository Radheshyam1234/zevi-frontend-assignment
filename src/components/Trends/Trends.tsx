import React from "react";

import "./Trends.css";
import TrendProductCard from "./TrendProductCard";
import { useProductData } from "../../Context/ProductsDataContext/ProductDataProvider";

type Props = {};

const Trends = (props: Props) => {
  const {
    productState: { trendProducts },
  } = useProductData();
  console.log(trendProducts, "trends");
  return (
    <div className="trends-wrapper">
      <div className="trends-heading">Latest Trends</div>
      <div className="trends-product-cards-container">
        {trendProducts?.map((product) => {
          return <TrendProductCard key={product.id} data={product} />;
        })}
      </div>
    </div>
  );
};

export default React.memo(Trends);
