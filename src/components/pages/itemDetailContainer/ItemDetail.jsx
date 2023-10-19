import { Box, Typography } from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";

export const ItemDetail = ({ productSelected, onAdd }) => {
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
      <Typography variant="h2" color={"primary"}>
        {productSelected.title}
      </Typography>
      <Typography variant="body1">{productSelected.description}</Typography>
      <Typography variant="body1">${productSelected.price}</Typography>
      <img
        style={{ width: 400 }}
        src={productSelected.img}
        alt="Imagen del producto"
      />
      <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
    </Box>
  );
};
