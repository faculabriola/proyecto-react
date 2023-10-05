import { Box } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <Box
      sx={{
        display: "flex",

        justifyContent: "space-evenly",
        margin: "10px",
      }}
    >
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </Box>
  );
};

export default ItemList;
