import { Box } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <Box
      sx={{
        img: "200px",
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
        textAlign: "center",
        paddingBottom: "50px",
      }}
    >
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </Box>
  );
};

export default ItemList;
