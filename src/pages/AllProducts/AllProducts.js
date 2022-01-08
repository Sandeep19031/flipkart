import React from "react";
import "./AllProducts.css";
import MobileCards from "../cardsTemplates/mobilesCard";
import { RangeStepInput } from "react-range-step-input";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function AllProducts() {
  const routePath = useLocation();
  const onTop = () => {
    // alert("done!!");
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);
  const [priceValue, setPriceValue] = useState(0);
  const [isChecked, setIsChecked] = useState(new Array(2).fill(false));
  const [ratingFilter, SetRatingFilter] = useState(0);
  const [discountFilter, SetDiscountFilter] = useState(0);
  const [brands, setBrands] = useState([]);
  const params = useParams();
  const productType = params.productType;
  useEffect(() => {
    const filterBrand = [];
    if (isChecked[0]) {
      filterBrand.push("Mi");
    }
    if (isChecked[1]) {
      filterBrand.push("Realme");
    }
    setBrands(filterBrand);
  }, [isChecked]);

  const handleOnChange = (position) => {
    const updatedCheckedState = isChecked.map((item, index) =>
      index === position ? !item : item
    );
    setIsChecked(updatedCheckedState);
    console.log(updatedCheckedState);
  };

  return (
    <div className="allProducts">
      <div className="allp-filters-container">
        <div className="allp-filters">
          <p>Filters</p>
        </div>
        <div className="allp-price">
          <p className="allp-price-heading">PRICE</p>
          <div className="allp-price-slider">
            <RangeStepInput
              min={0}
              max={30000}
              value={priceValue}
              step={2000}
              onChange={(e) => {
                const newVal = e.target.value;
                setPriceValue(newVal);
                console.log(newVal);
              }}
            />
            <span className="allp-price-value">{priceValue}</span>
          </div>
        </div>
        <div className="allp-brand">
          <p className="allp-brand-heading">BRAND</p>
          <label className="allp-container">
            <input
              className="allp-checkbox"
              type="checkbox"
              checked={isChecked[0]}
              onChange={() => handleOnChange(0)}
            />
            Mi
          </label>
          <br />

          <label className="allp-container">
            <input
              className="allp-checkbox"
              type="checkbox"
              checked={isChecked[1]}
              onChange={() => handleOnChange(1)}
            />
            Realme
          </label>
        </div>
        <div className="allp-rating">
          <p className="allp-rating-heading">CUSTOMER RATING</p>
          <label className="allp-container">
            <input
              type="radio"
              className="allp-rating"
              value={4}
              checked={Number(ratingFilter) === 4}
              onChange={(event) => SetRatingFilter(event.target.value)}
            />
            4★ & above
          </label>
          <br />

          <label className="allp-container">
            <input
              type="radio"
              className="allp-rating"
              value={3}
              checked={Number(ratingFilter) === 3}
              onChange={(event) => SetRatingFilter(event.target.value)}
            />
            3★ & above
          </label>
          <br />

          <label className="allp-container">
            <input
              type="radio"
              className="allp-rating"
              value={2}
              checked={Number(ratingFilter) === 2}
              onChange={(event) => SetRatingFilter(event.target.value)}
            />
            2★ & above
          </label>
          <br />
          <label className="allp-container">
            <input
              type="radio"
              className="allp-rating"
              value={0}
              checked={Number(ratingFilter) === 0}
              onChange={(event) => SetRatingFilter(event.target.value)}
            />
            None
          </label>
        </div>
        <div className="allp-discount">
          <p className="allp-discount-heading">DISCOUNT</p>
          <label className="allp-container">
            <input
              type="radio"
              className="allp-discount"
              value={10}
              checked={Number(discountFilter) === 10}
              onChange={(event) => SetDiscountFilter(event.target.value)}
            />
            10% or more
          </label>
          <br />

          <label className="allp-container">
            <input
              type="radio"
              className="allp-discount"
              value={5}
              checked={Number(discountFilter) === 5}
              onChange={(event) => SetDiscountFilter(event.target.value)}
            />
            5% or more
          </label>
          <br />
          <label className="allp-container">
            <input
              type="radio"
              className="allp-discount"
              value={0}
              checked={Number(discountFilter) === 0}
              onChange={(event) => SetDiscountFilter(event.target.value)}
            />
            None
          </label>
        </div>
      </div>
      <div className="allp-results">
        <div className="allp-result-container">
          <p className="allp-result-container-path">Home &#x2192; Mobiles</p>
          <p className="allp-result-container-no-of-results">
            <span className="allp-Mobile-brand">Mi Mobiles</span>(Showing 10
            results for mobiles)
          </p>
        </div>
        <div>
          {productType === "Mobiles" && (
            <MobileCards
              param={{
                updated_price: priceValue,
                rating: ratingFilter,
                discount: discountFilter,
                brand: brands,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
