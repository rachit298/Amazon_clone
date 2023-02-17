import React from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

function Product(props) {
  
  return (
    <div className="product">
      <img className="product__image" src={props.image} alt="" />
      <p className="product__title">{props.title}</p>
      <p className="product__brand">by {props.brand}</p>
      <br />
      <div className="product__rating">
        {Array(props.rating)
          .fill()
          .map((_) => (
            <p>
              <StarIcon />
            </p>
          ))}
        <small> ({props.review})</small>
      </div>
      <p className="product__price">
        <CurrencyRupeeIcon />
        {props.price}
      </p>
      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
}

export default Product;
