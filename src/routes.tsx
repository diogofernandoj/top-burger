import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";

// Pages
import Burgers from "./pages/Main/Burgers";
import Pizzas from "./pages/Main/Pizzas";
import Drinks from "./pages/Main/Drinks";
import Desserts from "./pages/Main/Desserts";

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Burgers />} />
        <Route path="/pizzas" element={<Pizzas />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/desserts" element={<Desserts />} />
      </Route>
    </Routes>
  );
};

export default RouterApp;
