import { Box, Button, Typography } from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";
import { Link } from "react-router-dom";

export const ItemDetail = ({
  productSelected,
  onAdd,
  initial,
  showCounter,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          height: "40vh",
        }}
      >
        <Typography variant="h2" color={"primary"}>
          {productSelected.title}
        </Typography>
        <Typography variant="h5">{productSelected.model}</Typography>
        <Typography variant="h6">${productSelected.price}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "40vw",
          textAlign: "center",
          paddingBottom: "20px",
        }}
      >
        <Typography variant="body1">{productSelected.description}</Typography>
      </Box>

      <img
        style={{ width: 400, paddingBottom: "20px" }}
        src={productSelected.img}
        alt="Imagen del producto"
      />
      {initial && (
        <Typography variant="h6">Tenes {initial} en el carrito</Typography>
      )}
      {showCounter ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CounterContainer
            stock={productSelected.stock}
            onAdd={onAdd}
            initial={initial}
          />
        </Box>
      ) : (
        <Link to="/cart">
          <Button color="secondary" variant="contained">
            Finalizar compra
          </Button>
        </Link>
      )}
    </Box>
  );
};
