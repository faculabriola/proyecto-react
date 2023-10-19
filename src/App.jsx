import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./themeConfig";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}
import AppRouter from "./router/AppRouter";

export default App;
