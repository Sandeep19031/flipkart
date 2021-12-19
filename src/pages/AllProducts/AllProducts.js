import React from "react";
import "./AllProducts.css";
import MobileCards from "../cardsTemplates/mobilesCard";
import { RangeStepInput } from "react-range-step-input";
import { useEffect, useState } from "react";

function AllProducts() {
  const [PriceValue, setPriceValue] = useState(0);
  const [IsChecked, setIsChecked] = useState(new Array(7).fill(false));

  const handleOnChange = (position) => {
    const updatedCheckedState = IsChecked.map((item, index) =>
      index === position ? !item : item
    );
    setIsChecked(updatedCheckedState);
    console.log(updatedCheckedState);
  };

  return (
    <div className="allProducts">
      <div className="filters-container">
        <div className="filters">
          <p>Filters</p>
        </div>
        <div className="price">
          <p className="price-heading">PRICE</p>
          <div className="price-slider">
            <RangeStepInput
              min={0}
              max={30000}
              value={PriceValue}
              step={2000}
              onChange={(e) => {
                const newVal = e.target.value;
                setPriceValue(newVal);
                console.log(newVal);
              }}
            />
            <span className="price-value">{PriceValue}</span>
          </div>
        </div>
        <div className="brand">
          <p className="brand-heading">BRAND</p>
          <label className="container">
            <input
              className="checkbox"
              type="checkbox"
              checked={IsChecked[0]}
              onChange={() => handleOnChange(0)}
            />
            Mi
          </label>
          <br />

          <label className="container">
            <input
              className="checkbox"
              type="checkbox"
              checked={IsChecked[1]}
              onChange={() => handleOnChange(1)}
            />
            Realme
          </label>
        </div>
        <div className="rating">
          <p className="rating-heading">CUSTOMER RATING</p>
          <label className="container">
            <input
              type="checkbox"
              checked={IsChecked[2]}
              onChange={() => handleOnChange(2)}
            />
            4★ & above
            <span className="checkmark"></span>
          </label>
          <br></br>

          <label className="container">
            <input
              type="checkbox"
              checked={IsChecked[3]}
              onChange={() => handleOnChange(3)}
            />
            3★ & above
            <span className="checkmark"></span>
          </label>
          <br></br>

          <label className="container">
            <input
              type="checkbox"
              checked={IsChecked[4]}
              onChange={() => handleOnChange(4)}
            />
            2★ & above
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="discount">
          <p className="discount-heading">DISCOUNT</p>
          <label className="container">
            <input
              type="checkbox"
              checked={IsChecked[5]}
              onChange={() => handleOnChange(5)}
            />
            10% or more
            <span className="checkmark"></span>
          </label>
          <br></br>

          <label className="container">
            <input
              type="checkbox"
              checked={IsChecked[6]}
              onChange={() => handleOnChange(6)}
            />
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
