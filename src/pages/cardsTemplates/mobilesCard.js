import React from "react";
import "./mobilesCard.css";

let data = {
  title: "Redmi 9 (Sporty Orange, 64 GB)  (4 GB RAM)",
  link: "https://www.linkpicture.com/q/Redmi-9-Sporty-Orange-64GB.jpeg",
  original_price: 10760,
  updated_price: 10090,
  discount: 6,
  highlights: [
    "4 GB RAM | 64 GB ROM",
    "16.59 cm (6.53 inch) HD+ Display",
    "13MP + 2MP | 5MP Front Camera",
    "5000 mAh Battery",
    "MediaTek Helio G35 Processor",
  ],
  warranty:
    "1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
};

function MobileCard() {
  return (
    <div className="mobileCard">
      <div className="card-image">
        <img src={data.link} alt="blank" />
      </div>
      <div className="card-desc">
        <p className="card-title">{data.title}</p>
        <div className="rate-block">
          <p>
            <span className="rate-star">4.5★</span>23,232 Rating & 734 Reviews
          </p>
        </div>
        <div>
          <ul className="specsList">
            {data.highlights.map((item, i) => (
              <li className="listItem" key={i}>
                {item}
              </li>
            ))}
            <li className="listItem">{data.warranty}</li>
          </ul>
        </div>
      </div>
      <div className="card-price">
        <p>
          &#x20b9;
          {data.updated_price.toLocaleString()}
          <span>
            <img
              className="logo"
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
              alt="fAssured"
            />
          </span>
        </p>
        <p className="discount1">
          <span>
            <del className="original_price">
              &#x20b9;{data.original_price.toLocaleString()}
            </del>
          </span>
          {data.discount}% off
        </p>
      </div>
    </div>
  );
}

MobileCard();

export default MobileCard;
