import { useEffect, useState } from "react";
import { products } from "../../../ProductsMock";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let producto = products.find((product) => product.id === +id);
    const getProduct = new Promise((resolve, reject) => {
      resolve(producto);
      //reject("error");
    });
    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);
  const onAdd = (quantity) => {
    let obj = {
      ...productSelected,
      quantity: quantity,
    };
    console.log("este es el producto que se agrega", obj);
  };
  return <ItemDetail productSelected={productSelected} onAdd={onAdd} />;
};

export default ItemDetailContainer;
