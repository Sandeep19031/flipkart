import React from "react";
import "./Home.css";

import CartLogo1 from "./cart-logo.png";
import { Link } from "react-router-dom";

const HomeProductCard = ({
  productName,
  productPrice,
  productBrand,
  productImgSrc,
}) => {
  return (
    <div className="homeProductCard">
      <div className="homeProductCard-img">
        <img src={productImgSrc} alt={productName} />
      </div>
      <div className="homeProductCard-description">
        <p className="homeProductCard-description-productName">{productName}</p>
        <p className="homeProductCard-description-productPrice">
          ₹{productPrice}
        </p>
        <p className="homeProductCard-description-productBrand">
          {productBrand}
        </p>
      </div>
    </div>
  );
};
const ProductsCard = ({ title, list, type }) => {
  return (
    <div className="productsCard">
      <div className="productsCard-left">
        <div className="productsCard-left-up">
          <p>{title}</p>
          <Link to={`/allProducts/${type}`} style={{textDecoration: 'none'}}>
          <div className="button">VIEW ALL</div>
          </Link>
        </div>

        <div className="productsCard-left-down">
          <img src={CartLogo1} alt="cart" height="100%" />
        </div>
      </div>
      <div className="productsCard-right">
        {list.map((val, _) => {
          return (
            <HomeProductCard
              productName={val.productName}
              productPrice={val.productPrice}
              productBrand={val.productBrand}
              productImgSrc={val.productImgSrc}
            />
          );
        })}
      </div>
    </div>
  );
};
function Home() {
  const HomeProductCard_Mobiles = [
    {
      productName: "SAMSUNG Galaxy Z Flip3 5G",
      productPrice: "84,999",
      productBrand: "SAMSUNG",
      productImgSrc:
        "https://rukminim1.flixcart.com/image/416/416/ksnjp8w0/mobile/f/k/y/galaxy-z-flip3-5g-sm-f711bzkainu-samsung-original-imag662axn2xmght.jpeg?q=70",
    },
    {
      productName: "realme 8s 5G",
      productPrice: "17,999",
      productBrand: "realme",
      productImgSrc:
        "https://rukminim1.flixcart.com/image/416/416/ktbu6q80/mobile/f/s/e/8s-5g-rmx3381-realme-original-imag6zhgra57dtqe.jpeg?q=70",
    },
  ];
  const HomeProductCard_Fashions = [
    {
      productName: "Women Floral Print Rayon A-line Kurta ",
      productPrice: "657",
      productBrand: "METRO-FASHION ",
      productImgSrc:
        "https://rukminim1.flixcart.com/image/880/1056/kkec4280/kurta/r/z/r/s-kr452a-metro-fashion-original-imafzr5zyytvgvrp.jpeg?q=50",
    },
    {
      productName: "Women Printed Rayon Straight Kurta",
      productPrice: "399",
      productBrand: "LIBAS",
      productImgSrc:
        "https://rukminim1.flixcart.com/image/880/1056/k7gikcw0/kurta/q/3/x/xl-8072mj-blue-libas-original-imafpz7gqjhf8thg.jpeg?q=50",
    },
  ];
  return (
    <div>
      <div className="body">
        <ProductsCard 
          title="Top Offers on Mobiles"
          list={HomeProductCard_Mobiles}
          type="Mobiles"
          />
        <ProductsCard 
          title="Today's Fashion Deals"
          list={HomeProductCard_Fashions}
          type="Fashion"
        />
      </div>
    </div>
  );
}

export default Home;
