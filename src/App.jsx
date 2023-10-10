import { ThemeProvider } from "@emotion/react";
import { Navbar } from "./components/layout/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import { customTheme } from "./themeConfig";
import { Box } from "@mui/material";
import { useState } from "react";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";

function App() {
  const [montar, setMontar] = useState(false);

  return (
    <Box>
      <>
        <ThemeProvider theme={customTheme}>
          <Home />
          <Navbar />
          {/* <ItemListContainer /> */}
          <ItemDetailContainer />
          {/* <Button variant="contained" onClick={() => setMontar(!montar)}>
            Montar/Desmontar
          </Button>
          {montar && <CounterContainer stock={4} />}
          {montar && <Home />} */}
        </ThemeProvider>
      </>
    </Box>
  );
}

export default App;
