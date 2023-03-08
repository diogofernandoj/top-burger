import { BrowserRouter } from "react-router-dom";

import RouterApp from "./routes";

import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  );
};

export default App;
