import React from "react";
import { ProductType } from "../../utilities/dataTypes";
import { useNavigate } from "react-router-dom";
import { useFilterData } from "../../Context/FilterContext/FilterProvider";

type Props = {
  key: number;
  data: ProductType;
};

const TrendProductCard = ({ data }: Props) => {
  const { filterDispatch } = useFilterData();
  const navigate = useNavigate();
  return (
    <div className="trends-product-card-wrapper">
      <div className="trends-product-card">
        <img src={data.image} alt="" />
        <p className="trend-product-card-title">{data.title.slice(0, 30)}</p>
      </div>
    </div>
  );
};

export default TrendProductCard;
