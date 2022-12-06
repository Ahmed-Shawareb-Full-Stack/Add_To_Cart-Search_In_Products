import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import Search from "./pages/Search";
import Navigation from "./pages/Navigation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Welcome />} />
        <Route path="products" element={<Products />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  );
}

export default App;
