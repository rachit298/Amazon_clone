import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "../../StateProvider/StateProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  function login() {
    if (user) {
      basket.length = 0;
      signOut(auth);
    }
  }

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>

      <div className="header__search">
        <select className="header__categories">
          <option value="All">All</option>
          <option value="Appliances">Appliances</option>
          <option value="Baby">Baby</option>
          <option value="Beauty">Beauty</option>
        </select>
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">
              Hello, {user ? user.email : "Sign in"}{" "}
            </span>

            <span className="header__optionLineTwo">
              {user ? "Sign out" : "Accounts & Lists"}
            </span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
