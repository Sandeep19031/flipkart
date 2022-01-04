import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/login/login";
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./pages/AllProducts/AllProducts";
import Bottom from "./pages/Bottom/Bottom";
import NavCard from "./pages/NavCard/NavCard";
import Navbar from "./pages/Navbar/Navbar";

function App() {
  let [Data, setData] = useState([]);
  let [Email, setEmail] = useState("");
  let [Password, setPassword] = useState("");
  let [IsLogin, setIsLogin] = useState(true);
  useEffect(() => {
    if (IsLogin) {
      axios
        .get("http://localhost:9000/login", {
          params: { Email: Email, Password: Password },
        })
        .then((res) => {
          setData(res.data);
        });
    } else {
      axios.post(
        "http://localhost:9000/signIn",
        {},
        {
          params: { Email: Email, Password: Password },
        }
      );
    }
  }, [Email, Password, IsLogin]);

  return (
    <div className="App">
      <Navbar />
      <NavCard />
      {/* {Data.length !== 0 ? (
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
          path="/allProducts/:productType"
          element={<AllProducts />}
        />
      </Routes>

      <Bottom />
    </div>
  );
}

export default App;
