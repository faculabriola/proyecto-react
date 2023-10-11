import { Box } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <Box
      sx={{
        img: "200px",
        display: "flex",
        justifyContent: "space-evenly",
        textAlign: "center",
      }}
    >
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </Box>
  );
};

export default ItemList;
