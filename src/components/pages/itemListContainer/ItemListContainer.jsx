import { useEffect, useState } from "react";
import { products } from "../../../ProductsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  console.log(categoryName);

  useEffect(() => {
    const tarea = new Promise((resolve) => {
      resolve(products);
      //reject("algo salio mal");
    });
    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;
