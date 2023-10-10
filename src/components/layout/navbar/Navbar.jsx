import MenuIcon from "@mui/icons-material/Menu";

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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#1e1e1e" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Nike
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Adidas
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Puma
          </Typography>
          <Button variant="contained" color={"secondary"}>
            Login
          </Button>
          <MenuIcon />
          <CartWidget />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
