import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

import { Box } from "@mui/material";
import CardSkeleton from "../../common/cardSkeleton/CardSkeleton";
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );
    const tarea = new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : products);
      }, 500);
    });
    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  return (
    <>
      {items.length === 0 ? (
        <Box style={{ display: "flex", gap: 20 }}>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </Box>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;
