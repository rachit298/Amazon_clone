import React from "react";
import "./Subtotal.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useStateValue } from "../../StateProvider/StateProvider";

function Subtotal() {
  const [{ basket }] = useStateValue();

  const total = basket?.reduce((amount, item) => {
    let str = item.price.replaceAll(",", "");
    let num = Number(str);
    return amount + num;
  }, 0);
  
  return (
    <div className="subtotal">
      <p className="subtotal__info">
        Subtotal ({basket.length} items):{" "}
        <strong>
          <span className="subtotal__currency">
            <CurrencyRupeeIcon />
          </span>

          {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </strong>
      </p>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
