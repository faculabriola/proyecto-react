import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <Box sx={{ paddingTop: "50px" }}>
      <Typography variant="h1">ESTE ES EL CARRITO</Typography>
      {cart.map((product) => (
        <Typography variant="h4" key={product.id}>
          {product.title}
        </Typography>
      ))}
      <Link to={"/checkout"}>
        <Button variant="contained" color="secondary">
          Finalizar comprar
        </Button>
      </Link>
    </Box>
  );
};

export default Cart;
