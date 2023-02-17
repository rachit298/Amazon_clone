import React from "react";
import { useStateValue } from "../../StateProvider/StateProvider";
import "./Checkout.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { nanoid } from "nanoid";
import Subtotal from "../Subtotal/Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <>
      <div className="checkout">
        {basket?.length === 0 ? (
          <div>
            <h2>Your Amazon Cart is empty</h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Amazon Cart</h2>
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  key={nanoid()}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  review={item.review}
                />
              );
            })}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__subtotal">
          <Subtotal />
        </div>
      )}

      <p className="checkout__terms">
        The price and availability of items at Amazon.in are subject to change.
        The shopping cart is a temporary place to store a list of your items and
        reflects each item's most recent price. Do you have a promotional code?
        We'll ask you to enter your claim code when it's time to pay.
      </p>
    </>
  );
}

export default Checkout;
