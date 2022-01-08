import React from "react";
import "./mobilesCard.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MobileCard({ data }) {
  return (
    <div className="mobileCard">
      <div className="card-image">
        <img src={data.imageLinks[0]} alt="blank" width={"75%"} />
      </div>
      <div className="card-desc">
        <p className="card-title">{data.title}</p>
        <div className="rate-block">
          <p>
            <span className="rate-star">{data.rating}★</span>23,232 Rating & 734
            Reviews
          </p>
        </div>
        <div>
          <ul className="specsList">
            {data.highlights.map((item, index) => (
              <li className="listItem" key={index}>
                {item}
              </li>
            ))}
            <li className="listItem" key={-1}>
              {data.warranty}
            </li>
          </ul>
        </div>
      </div>
      <div className="card-price">
        <p>
          &#x20b9;
          {Number(
            (
              data.original_price -
              (data.discount * data.original_price) / 100
            ).toFixed(0)
          ).toLocaleString()}
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

function MobileCards(params = { param: {} }) {
  let type = "Mobiles";
  // console.log(params);
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/mobiles", {
        params: params.param,
      })
      .then((res) => {
        setDataList(res.data);
      });
  }, [params]);
  return (
    <div>
      {dataList.map((data, index) => (
        <Link
          to={`/allProducts/${type}/${data.title}`}
          state={data}
          style={{ textDecoration: "none", color: "black" }}
        >
          <MobileCard data={data} />
        </Link>
      ))}
    </div>
  );
}

export default MobileCards;
