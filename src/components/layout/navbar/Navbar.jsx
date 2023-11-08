import { Link } from "react-router-dom";

import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import CartWidget from "../../common/cartwidget/CartWidget";
import { Category } from "@mui/icons-material";

export const Navbar = () => {
  let arr = [
    {
      id: 1,
      name: "Todas",
      path: "/",
    },
    {
      id: 2,
      name: "Urbanas",
      path: "/category/urbanas",
    },
    {
      id: 3,
      name: "Deportivas",
      path: "/category/deportivas",
    },
  ];
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
                style={{ width: "80px" }}
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
              {arr.map((category) => (
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  key={category.name}
                >
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    key={category.id}
                    to={category.path}
                  >
                    {category.name}
                  </Link>
                </Typography>
              ))}
            </Box>

            <Box sx={{}}>
              <CartWidget />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
