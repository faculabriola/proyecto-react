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
      }}
    >
      <Typography variant="h5" color={"primary"}>
        <h2>{productSelected.title}</h2>
      </Typography>
      <Typography variant="body1">{productSelected.description}</Typography>
      <img
        style={{ width: 400 }}
        src="https://res.cloudinary.com/djnzf670x/image/upload/v1696440033/puma_magnify_nito_wwxxoy.avif"
        alt=""
      />
      <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
    </Box>
  );
};
