import { Box, Button, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();
  const clearCartAlert = () => {
    Swal.fire({
      title: "Seguro?",
      text: "Eliminaras todos los productos del carrito!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrar!",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          title: "Listo!",
          text: "El carrito esta vacio!",
          icon: "success",
        });
      }
    });
  };
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

          <img style={{ height: "300px" }} src={product.img}></img>

          <Typography variant="h4">Modelo: {product.model}</Typography>

          <Typography variant="h4">Cantidad: {product.quantity}</Typography>

          <Typography variant="h4">Precio: {product.price}</Typography>
          <IconButton onClick={() => deleteProductById(product.id)}>
            <DeleteIcon sx={{ fontSize: "2rem" }} color="primary" />
          </IconButton>
          {/* <DeleteIcon
            onClick={() => deleteProductById(product.id)}
            color="primary"
            variant="contained"
          >
            Eliminar
          </DeleteIcon> */}
        </Box>
      ))}
      {cart.length > 0 && (
        <Box sx={{ paddingBottom: "20px" }}>
          <Typography variant="h4">El total seria: {total}</Typography>
          <Link to={"/checkout"}>
            <Button variant="contained" color="secondary">
              Finalizar comprar
            </Button>
          </Link>
          <Button
            onClick={clearCartAlert}
            variant="contained"
            color="secondary"
          >
            Vaciar carrito
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
