import React from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import StarIcon from "@mui/icons-material/Star";
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider/StateProvider";

function CheckoutProduct(props) {
  const [{}, dispatch] = useStateValue();

  function removeFromBasket() {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={props.image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{props.title}</p>
        <div className="checkoutProduct__rating">
          {Array(props.rating)
            .fill()
            .map((_) => (
              <p>
                <StarIcon />
              </p>
            ))}
          <small> ({props.review})</small>
        </div>
        <p className="checkoutProduct__price">
          <small>
            <CurrencyRupeeIcon />
          </small>
          {props.price}
        </p>
        <button onClick={removeFromBasket}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
