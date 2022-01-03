import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/login/login";
import axios from "axios";
import { useEffect, useState } from "react";

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
      {Data.length !== 0 ? (
        <Home />
      ) : (
        <Login
          setPassword={setPassword}
          setEmail={setEmail}
          setIsLogin={setIsLogin}
        />
      )}
    </div>
  );
}

export default App;
