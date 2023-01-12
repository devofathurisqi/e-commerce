import RegisterPage from "./component/RegisterPage";
import {Route, Routes} from "react-router-dom"
import LandingPage from "./component/LandingPage";
import Login from "./component/Login";
import Product from "./component/Product";
import About from "./component/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/products/:id" element={<Product/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  );
}

export default App;
