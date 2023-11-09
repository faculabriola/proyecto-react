import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Box, Button } from "@mui/material";
import CardSkeleton from "../../common/cardSkeleton/CardSkeleton";
import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { products } from "../../../productsMock";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  // const rellenarDB = () => {
  //   const productCollection = collection(db, "products");
  //   products.forEach((elemento) => {
  //     addDoc(productCollection, elemento);
  //   });
  // };

  useEffect(() => {
    let productCollection = collection(db, "products");
    let consulta = undefined;
    if (!categoryName) {
      consulta = productCollection;
    } else {
      consulta = query(
        productCollection,
        where("category", "==", categoryName)
      );
    }
    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(newArray);
    });
  }, [categoryName]);

  return (
    <>
      {/* <Button onClick={rellenarDB} variant="contained" color="secondary">
        Rellenar
      </Button> */}
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
