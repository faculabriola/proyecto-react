import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./themeConfig";
import CartContextComponent from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextComponent>
        <ThemeProvider theme={customTheme}>
          <AppRouter />
        </ThemeProvider>
      </CartContextComponent>
    </BrowserRouter>
  );
}
import AppRouter from "./router/AppRouter";

export default App;
