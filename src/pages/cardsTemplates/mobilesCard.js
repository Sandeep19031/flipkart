import React from "react";
import "./mobilesCard.css";
import axios from "axios";
import { useEffect, useState } from "react";

function MobileCard({ data }) {
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

function MobileCards() {
  const [DataList, setDataList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9000/mobiles").then((res) => {
      setDataList(res.data);
    });
  }, []);
  return (
    <div>
      {DataList.map((data) => (
        <MobileCard data={data} />
      ))}
    </div>
  );
}

export default MobileCards;
