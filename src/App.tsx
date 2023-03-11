import { BrowserRouter } from "react-router-dom";

import RouterApp from "./routes";

import { Theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/global";

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <RouterApp />
        <GlobalStyle />
      </Theme>
    </BrowserRouter>
  );
}
