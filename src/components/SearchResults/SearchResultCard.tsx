import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import "./SearchResults.css";
import { ProductType } from "../../utilities/dataTypes";
import { ratings } from "../../utilities/utilityData";

type Props = {
  data: ProductType;
};

const SearchResultCard = ({ data }: Props) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <div className="searchResult-card-wrapper">
      <div className="searchResult-card-image-container">
        <img src={data.image} alt="" />
        <div className="searchResult-card-viewProduct-container">
          View Product
        </div>
      </div>

      <p className="searchResult-card-title">{data.title.slice(0, 30)}</p>
      <p className="searchResult-card-prices">
        <span className="searchResult-card-slashed-price">
          {" "}
          Rs.{" "}
          {Math.floor(Number(data.price) * 100) +
            Math.floor(Math.random() * 100)}
        </span>{" "}
        <span className="searchResult-card-price">
          Rs. {Math.floor(Number(data.price) * 100)}
        </span>
      </p>
      <p className="searchResult-card-ratings-container">
        <span className="searchResult-card-rating">
          {ratings[Math.ceil(4 - Number(data.rating.rate))].item}
        </span>{" "}
        <span>({data.rating.count})</span>
      </p>
      <div
        className="searchResult-card-like"
        onClick={() => {
          setIsLiked(!isLiked);
        }}
      >
        {isLiked ? (
          <AiFillHeart
            style={{ color: "red", height: "30px", width: "30px" }}
          />
        ) : (
          <AiOutlineHeart style={{ height: "30px", width: "30px" }} />
        )}
      </div>
    </div>
  );
};

export default SearchResultCard;
