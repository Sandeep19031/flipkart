import React from "react";
import "./AllProducts.css";
import MobileCards from "../cardsTemplates/mobilesCard";
import { RangeStepInput } from "react-range-step-input";
import { useEffect, useState } from "react";

function AllProducts() {
  const [PriceValue, setPriceValue] = useState(0);
  const [IsChecked, setIsChecked] = useState(new Array(2).fill(false));
  const [RatingFilter, SetRatingFilter] = useState(0);
  const [DiscountFilter, SetDiscountFilter] = useState(0);
  const [Brands, setBrands] = useState([]);
  useEffect(() => {
    const filterBrand = [];
    if (IsChecked[0]) {
      filterBrand.push("Mi");
    }
    if (IsChecked[1]) {
      filterBrand.push("Realme");
    }
    setBrands(filterBrand);
    console.log(filterBrand);
  }, [IsChecked]);

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
              type="radio"
              name="rating"
              value={4}
              checked={RatingFilter == 4}
              onChange={(event) => SetRatingFilter(event.target.value)}
            />
            4★ & above
          </label>
          <br />

          <label className="container">
            <input
              type="radio"
              name="rating"
              value={3}
              checked={RatingFilter == 3}
              onChange={(event) => SetRatingFilter(event.target.value)}
            />
            3★ & above
          </label>
          <br />

          <label className="container">
            <input
              type="radio"
              name="rating"
              value={2}
              checked={RatingFilter == 2}
              onChange={(event) => SetRatingFilter(event.target.value)}
            />
            2★ & above
          </label>
          <br />
          <label className="container">
            <input
              type="radio"
              name="rating"
              value={0}
              checked={RatingFilter == 0}
              onChange={(event) => SetRatingFilter(event.target.value)}
            />
            None
          </label>
        </div>
        <div className="discount">
          <p className="discount-heading">DISCOUNT</p>
          <label className="container">
            <input
              type="radio"
              name="discount"
              value={10}
              checked={DiscountFilter == 10}
              onChange={(event) => SetDiscountFilter(event.target.value)}
            />
            10% or more
          </label>
          <br />

          <label className="container">
            <input
              type="radio"
              name="discount"
              value={5}
              checked={DiscountFilter == 5}
              onChange={(event) => SetDiscountFilter(event.target.value)}
            />
            5% or more
          </label>
          <br />
          <label className="container">
            <input
              type="radio"
              name="discount"
              value={0}
              checked={DiscountFilter == 0}
              onChange={(event) => SetDiscountFilter(event.target.value)}
            />
            None
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
          <MobileCards
            param={{
              updated_price: PriceValue,
              rating: RatingFilter,
              discount: DiscountFilter,
              brand: Brands,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
