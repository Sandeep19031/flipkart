import React from "react";
import "./AllProducts.css";
import MobileCards from "../cardsTemplates/mobilesCard";

function AllProducts() {
  return (
    <div className="allProducts">
      <div className="filters-container">
        <div className="filters">
          <p>Filters</p>
        </div>
        <div className="price">
          <p className="price-heading">PRICE</p>
          <div className="price-slider"></div>
          <div className="price-range"></div>
        </div>
        <div className="brand">
          <p className="brand-heading">BRAND</p>
          <label className="container">
            <input className="checkbox" type="checkbox" />
            Mi
          </label>
          <br />

          <label className="container">
            <input className="checkbox" type="checkbox" />
            Realme
          </label>
        </div>
        <div className="rating">
          <p className="rating-heading">CUSTOMER RATING</p>
          <label className="container">
            <input type="checkbox" />
            4★ & above
            <span className="checkmark"></span>
          </label>
          <br></br>

          <label className="container">
            <input type="checkbox" />
            3★ & above
            <span className="checkmark"></span>
          </label>
          <br></br>

          <label className="container">
            <input type="checkbox" />
            2★ & above
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="discount">
          <p className="discount-heading">DISCOUNT</p>
          <label className="container">
            <input type="checkbox" />
            10% or more
            <span className="checkmark"></span>
          </label>
          <br></br>

          <label className="container">
            <input type="checkbox" />
            5% or more
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
      <div className="results">
        <div className="result-container">
          <p className="result-container-path">Home &#x2192; Mobiles</p>
          <p className="result-container-no-of-results">
            <span className="Mobile-brand">Mi Mobiles</span>(Showing 10 results
            for mobiles)
          </p>
        </div>
        <div>
          <MobileCards />
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
