import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  return (
    <Box sx={{ paddingTop: "50px" }}>
      <Typography variant="h1">ESTE ES EL CARRITO</Typography>
      {cart.map((product) => (
        <Box key={product.id}>
          <Typography variant="h4">{product.title}</Typography>

          <Typography variant="h4">Cantidad: {product.quantity}</Typography>
        </Box>
      ))}
      <Link to={"/checkout"}>
        <Button variant="contained" color="secondary">
          Finalizar comprar
        </Button>
      </Link>
      <Button onClick={clearCart} variant="contained" color="secondary">
        Vaciar carrito
      </Button>
    </Box>
  );
};

export default Cart;
