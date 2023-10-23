import { useContext, useEffect, useState } from "react";
import { products } from "../../../ProductsMock";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

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
    let item = {
      ...productSelected,
      quantity: quantity,
    };
    addToCart(item);
  };
  return <ItemDetail productSelected={productSelected} onAdd={onAdd} />;
};

export default ItemDetailContainer;
