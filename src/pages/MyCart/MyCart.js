import React, { useEffect, useState } from "react";
import "./MyCart.css";
// import { useParams } from "react-router-dom";s
import axios from "axios";
import { useLocation } from "react-router-dom";

const Card = ({ index, data, userData, setUserData, setTest }) => {
  return (
    <div id={data._id} className="productCard-Block">
      <div className="productCard-leftBlock">
        <img src={data.imageLinks[0]} alt="blank" height={200} />
      </div>
      <div className="productCard-rightBlock">
        <p className="productCart-brand">{data.brand.toLocaleUpperCase()}</p>
        <p className="productCart-title">{data.title}</p>
        <p className="productCart-discount">
          <span className="productCart-price">
            &#x20b9;
            {Number(
              (
                data.original_price -
                (data.discount * data.original_price) / 100
              ).toFixed(0)
            ).toLocaleString()}
          </span>
          <span className="productCart-originalPrice">
            <del>&#x20b9;{data.original_price.toLocaleString()}</del>
          </span>
          {data.discount}% off
        </p>
        <button
          className="productCartBtn"
          onClick={() => {
            // document.getElementById(data._id).style.display = "none";
            userData.ProductCart = userData.ProductCart.filter(
              (value, index, arr) => {
                return value !== data._id;
              }
            );
            console.log(data._id);
            setUserData(userData);
            setTest((t) => (t + 1) % 10);
          }}
        >
          remove
        </button>
      </div>
    </div>
  );
};

function MyCart({ functions }) {
  const routePath = useLocation();
  const onTop = () => {
    // alert("done!!");
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);
  const [userData, setUserData] = functions;
  // const params = useParams();
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [test, setTest] = useState(0);
  const handleState = (e) => {
    setUserData(e);
    console.log("handle");
  };
  useEffect(() => {
    console.log("cart--updated!!");
    axios
      .get("http://localhost:9000/products", {
        params: { _id: userData.ProductCart },
      })
      .then((res) => {
        setCartProducts(res.data);
      });
  }, [userData, test]);
  useEffect(() => {
    console.log("total--updated!!");
    let t = 0;
    for (let data of cartProducts) {
      t += Number(
        (
          data.original_price -
          (data.discount * data.original_price) / 100
        ).toFixed(0)
      );
    }
    setTotal(t);
  }, [cartProducts]);

  return (
    <div className="MyCart">
      {cartProducts.map((data, index) => (
        <Card
          index={index}
          data={data}
          userData={userData}
          setUserData={handleState}
          setTest={setTest}
        />
      ))}
      <div className="totalBill">
        <h1>
          Total Price --{">"} {Number(total).toLocaleString()}
        </h1>
      </div>
    </div>
  );
}

export default MyCart;
