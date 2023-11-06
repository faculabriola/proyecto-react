import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();
  return (
    <Box sx={{ paddingTop: "50px" }}>
      <Typography variant="h1">ESTE ES EL CARRITO</Typography>
      {cart.map((product) => (
        <Box
          sx={{
            border: "1px solid black",
            marginBottom: "10px",
            borderRadius: "5px",
            paddingBottom: "5px",
            paddingLeft: "5px",
          }}
          key={product.id}
        >
          <Typography variant="h4">{product.title}</Typography>

          <Typography variant="h4">Cantidad: {product.quantity}</Typography>

          <Typography variant="h4">Precio: {product.price}</Typography>
          <Button
            onClick={() => deleteProductById(product.id)}
            color="secondary"
            variant="contained"
          >
            Eliminar
          </Button>
        </Box>
      ))}
      <Typography variant="h4">El total seria: {total}</Typography>
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
