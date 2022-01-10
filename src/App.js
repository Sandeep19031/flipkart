import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/login/login";
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AllProducts from "./pages/AllProducts/AllProducts";
import Bottom from "./pages/Bottom/Bottom";
import NavCard from "./pages/NavCard/NavCard";
import Navbar from "./pages/Navbar/Navbar";
import Product from "./pages/ProductDescPage/product";
import MyCart from "./pages/MyCart/MyCart";

function App() {
  let [data, setData] = useState({});
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [isLogin, setIsLogin] = useState(true);
  let [username, setUsername] = useState("");

  const handleState = (e) => {
    setData((e) => e);
    console.log("Data has changed");
    console.log(data);
    axios.post(
      "http://localhost:9000/users",
      {},
      {
        params: data,
      }
    );
  };

  useEffect(() => {
    if (isLogin) {
      axios
        .get("http://localhost:9000/login", {
          params: { Email: email, Password: password },
        })
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        });
    } else {
      axios.post(
        "http://localhost:9000/signIn",
        {},
        {
          params: { Email: email, Password: password, Username: username },
        }
      );
    }
  }, [email, password, isLogin, username]);
  console.log(data, !Object.keys(data).length);
  return (
    <div className="App">
      <Navbar UserData={data} />
      <NavCard />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              {Object.keys(data).length ? (
                <Home />
              ) : (
                <Login
                  setPassword={setPassword}
                  setEmail={setEmail}
                  setIsLogin={setIsLogin}
                  setUsername={setUsername}
                />
              )}
            </div>
          }
        />
        <Route exact path="/*" element={<Navigate replace to="/" />} />
        <Route
          exact
          path="/Shopping-Cart"
          element={
            Object.keys(data).length ? (
              <MyCart functions={[data, handleState]} />
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
        <Route
          exact
          path="/allProducts/:productType"
          element={
            Object.keys(data).length ? (
              <AllProducts />
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
        <Route
          exact
          path="/allProducts/:productType/:productName"
          element={
            Object.keys(data).length ? (
              <Product functions={[data, handleState]} />
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
      </Routes>

      <Bottom />
    </div>
  );
}

export default App;
