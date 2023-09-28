import { ThemeProvider } from "@emotion/react";
import { Navbar } from "./components/layout/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import { customTheme } from "./themeConfig";
import PruebaLogin from "./components/pages/pruebaLogin/PruebaLogin";
import Login from "./components/pages/login/Login";

function App() {
  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <Home />
        <Navbar />
        <Login />
        <PruebaLogin />
      </ThemeProvider>
    </div>
  );
}

export default App;
