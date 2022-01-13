import React, { useEffect, useState } from "react";
import "./product.css";
// import { useParams } from "react-router-dom";
import { useLocation } from "react-router";
function Product({ functions }) {
  const location = useLocation();
  const onTop = () => {
    // alert("done!!");
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [location]);
  // const params = useParams();
  const data = location.state;
  // let listOfImages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0];
  // const productType = params.productType;
  // const productName = params.productName;
  const [userData, setUserData] = functions;
  let [mainImage, setMainImage] = useState(`url(${data.imageLinks[0]})`);
  // console.log(document.getElementsByClassName("product-allImages"));
  useEffect(() => {
    console.log("changedImage!!", mainImage);
  }, [mainImage]);
  return (
    <div className="product">
      <div className="product-leftBlock">
        <div>
          <div className="product-images">
            <div
              className="product-allImages"
              // id="allImages"
              // style={{
              //   height: document.getElementById("allImages").offsetWidth,
              // }}
            >
              {data.imageLinks.map((link) => (
                <div
                  className="product-imageBox"
                  style={{
                    backgroundImage: `url(${link})`,
                  }}
                  onMouseOver={(event) => {
                    console.log(event.target.style.backgroundImage);
                    setMainImage(event.target.style.backgroundImage);
                  }}
                ></div>
              ))}
            </div>
            <div
              className="product-currImage"
              style={{
                backgroundImage: mainImage,
              }}
            ></div>
          </div>
          <div className="product-btnContainer">
            <button
              onClick={() => {
                if (userData.ProductCart === undefined) {
                  userData.ProductCart = [];
                }
                if (userData.ProductCart.includes(data._id)) {
                  alert("Product is already in the cart!!");
                  return;
                } else {
                  userData.ProductCart.push(data._id);
                  setUserData(userData);
                  alert("Product is added to the cart!!");
                }
              }}
              className="product-AddToCartBtn"
            >
              ADD TO CART
            </button>
            <button className="product-BuyNowBtn">BUY NOW</button>
          </div>
        </div>
      </div>
      <div className="product-rightBlock">
        <p className="product-brand">{data.brand.toLocaleUpperCase()}</p>
        <p className="product-title">{data.title}</p>
        <p className="product-discount">
          <span className="product-price">
            &#x20b9;
            {Number(
              (
                data.original_price -
                (data.discount * data.original_price) / 100
              ).toFixed(0)
            ).toLocaleString()}
          </span>
          <span className="product-originalPrice">
            <del>&#x20b9;{data.original_price.toLocaleString()}</del>
          </span>
          {data.discount}% off
        </p>
        <p className="product-rateBlock">
          <span className="product-rateStar">{data.rating}★</span>23,232 Rating
          & 734 Reviews
          <span>
            <img
              className="flipkart-logo"
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
              alt="fAssured"
            />
          </span>
        </p>
        <p className="product-subHeadings">Available Offers</p>
        {Object.keys(data.Available_offers).map((key, index) => (
          <p>
            <span>
              <img
                className="product-listLogo"
                alt=""
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
              />
            </span>
            <span className="product-offerTitle">{key}</span>
            <span className="product-offer">{data.Available_offers[key]}</span>
          </p>
        ))}
        <hr className="product-hrLine"></hr>
        <div style={{ marginLeft: "24px", marginRight: "24px" }}>
          <div className="product-subtitleContainer">
            <p className="product-subtitle">Delivery Details</p>
            <p
              onClick={(event) => {
                const temp =
                  document.getElementById("delivery-details").style.display;
                document.getElementById("delivery-details").style.display =
                  temp === "none" ? "block" : "none";
                console.log(event.target.textContent);
                event.target.textContent = temp === "none" ? "-" : "+";
              }}
              className="hideAndShowSign"
            >
              -
            </p>
          </div>
          <div id="delivery-details"></div>
        </div>
        <hr className="product-hrLine"></hr>
        <div style={{ marginLeft: "24px", marginRight: "24px" }}>
          <div className="product-subtitleContainer">
            <p className="product-subtitle">Product Details</p>
            <p
              onClick={(event) => {
                const temp =
                  document.getElementById("product-details").style.display;
                document.getElementById("product-details").style.display =
                  temp === "none" ? "block" : "none";
                console.log(event.target.textContent);
                event.target.textContent = temp === "none" ? "-" : "+";
              }}
              className="hideAndShowSign"
            >
              -
            </p>
          </div>
          <div id="product-details">
            <p className="product-subSubHeading">Specifications:</p>
            <ul className="product-specsList">
              {data.highlights.map((item, index) => (
                <li className="product-specslistItem" key={index}>
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ marginTop: "40px" }} className="product-specslistItem">
              <span className="product-subSubHeading">Warranty:</span>
              {data.warranty}
            </p>
            <p className="product-subSubHeading">Description:</p>
            <p className="product-specslistItem">{data.description}</p>
          </div>
        </div>
        <hr className="product-hrLine"></hr>
        <div style={{ marginLeft: "24px", marginRight: "24px" }}>
          <div className="product-subtitleContainer">
            <p style={{ margin: "0px" }}>
              <span className="product-subtitle">Ratings & Reviews</span>
              <span style={{ fontSize: "22px" }} className="product-rateStar">
                {data.rating}★
              </span>
              <span style={{ fontSize: "17px" }} className="product-rateBlock">
                23,232 Rating & 734 Reviews
              </span>
            </p>
            <button className="product-rateButton">Rate Product</button>
          </div>
        </div>
        <hr className="product-hrLine"></hr>
      </div>
    </div>
  );
}

export default Product;
