import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <Box sx={{ paddingTop: "50px" }}>
      <Typography variant="h1">ESTE ES EL CARRITO</Typography>
      <Link to={"/checkout"}>
        <Button variant="contained" color="secondary">
          Finalizar comprar
        </Button>
      </Link>
    </Box>
  );
};

export default Cart;
