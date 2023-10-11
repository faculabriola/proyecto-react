import { Outlet, Link } from "react-router-dom";

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import CartWidget from "../../common/cartwidget/CartWidget";

export const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "#1e1e1e",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Link to={"/"}>
              <img
                style={{ width: "60px" }}
                src="https://res.cloudinary.com/djnzf670x/image/upload/v1696987703/_e516f7d9-0da8-4adf-b19b-aefe361c5d10_nof6hh.jpg"
              />
            </Link>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "space-evenly",
              }}
            >
              <Link to="/category/urbanas">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Urbanas
                </Typography>
              </Link>
              <Link to="/category/deportivas">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Deportivas
                </Typography>
              </Link>
            </Box>

            <Box sx={{}}>
              <Button variant="contained" color={"secondary"}>
                Login
              </Button>

              <CartWidget />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
};
