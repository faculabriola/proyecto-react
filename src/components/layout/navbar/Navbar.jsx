import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
          <Button color={"secondary"}>Login</Button>
          <AddShoppingCartIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
};