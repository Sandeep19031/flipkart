import "./App.css";
import Home from "./pages/Home/Home";
import { Routes,Route} from "react-router-dom";
import AllProducts from "./pages/AllProducts/AllProducts";
import Bottom from "./pages/Bottom/Bottom";
import NavCard from "./pages/NavCard/NavCard";
import Navbar from "./pages/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavCard />

      <Routes>
        <Route exact path="/" element={<Home />} />  
        <Route exact path="/allProducts/:productType" element={<AllProducts />} />  
      </Routes>
      
      <Bottom />
    </div>
  );
}

export default App;
