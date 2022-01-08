import "./App.css";
import Home from "./pages/Home/Home";
// import Login from "./pages/login/login";
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./pages/AllProducts/AllProducts";
import Bottom from "./pages/Bottom/Bottom";
import NavCard from "./pages/NavCard/NavCard";
import Navbar from "./pages/Navbar/Navbar";
import Product from "./pages/ProductDescPage/product";
import MyCart from "./pages/MyCart/MyCart";

function App() {
  let [data, setData] = useState([]);
  let [email, setEmail] = useState("AJ");
  let [password, setPassword] = useState("1234");
  let [isLogin, setIsLogin] = useState(true);

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
          setData(res.data[0]);
        });
    } else {
      axios.post(
        "http://localhost:9000/signIn",
        {},
        {
          params: { Email: email, Password: password },
        }
      );
    }
  }, [email, password, isLogin]);
  return (
    <div className="App">
      <Navbar UserData={data} />
      <NavCard />
      {/* {data.length !== 0 ? (
        <Home />
      ) : (
        <Login
          setPassword={setPassword}
          setEmail={setEmail}
          setIsLogin={setIsLogin}
        />
      )} */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/Shopping-Cart"
          element={<MyCart functions={[data, handleState]} />}
        />
        <Route
          exact
          path="/allProducts/:productType"
          element={<AllProducts />}
        />
        <Route
          exact
          path="/allProducts/:productType/:productName"
          element={<Product functions={[data, handleState]} />}
        />
      </Routes>

      <Bottom />
    </div>
  );
}

export default App;
