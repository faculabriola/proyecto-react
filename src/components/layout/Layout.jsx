import { Box } from "@mui/material";
import { Navbar } from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box>
      <Box sx={{ height: "10vh" }}>
        <Navbar />
      </Box>
      <Box sx={{ minHeight: "80vh" }}>
        <Outlet />
      </Box>
      <Box sx={{ height: "10vh" }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
