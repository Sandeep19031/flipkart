import React from "react";
import "./Navbar.css";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const Account = ({ Username }) => {
  return (
    <div className="Account">
      <p>{Username}</p>
    </div>
  );
};

const Cart = () => {
  return (
    <div className="Cart">
      <p>Cart</p>
      <ShoppingCartOutlinedIcon />
    </div>
  );
};

const Login = () => {
  return <div className="Login">Login</div>;
};

const More = () => {
  return <div className="More">More</div>;
};

function Navbar({ UserData }) {
  const login = true;
  return (
    <div className="navbar">
      <div className="navbar-left" id="icon">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_3b0baa.png"
            alt="Flipkart"
            width="60%"
          />
        </Link>
      </div>

      <div className="navbar-mid">
        <div className="searchDiv">
          <input
            type="text"
            placeholder="Search for products, brands and more"
          />
          <SearchIcon />
        </div>
      </div>
      <div className="navbar-right">
        <div className="right">
          {!login && <Login />}
          {login && <Account Username={UserData.Username} />}
          <Link to="/Shopping-Cart" style={{ textDecoration: "none" }}>
            <Cart />
          </Link>
          <More />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
