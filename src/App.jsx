import { ThemeProvider } from "@emotion/react";
import { Navbar } from "./components/layout/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import { customTheme } from "./themeConfig";
import { Box, Button } from "@mui/material";
import CounterContainer from "./components/common/counter/CounterContainer";
import { useState } from "react";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  const [montar, setMontar] = useState(false);

  return (
    <Box>
      <ThemeProvider theme={customTheme}>
        <Home />
        <Navbar />
        <ItemListContainer />
        <Button variant="contained" onClick={() => setMontar(!montar)}>
          Montar/Desmontar
        </Button>
        {montar && <CounterContainer stock={4} />}
        {montar && <Home />}
      </ThemeProvider>
    </Box>
  );
}

export default App;
