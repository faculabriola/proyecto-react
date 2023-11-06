import Cart from "../components/pages/cart/Cart";
import Checkout from "../components/pages/checkout/Checkout";
import CheckoutFormik from "../components/pages/checkoutFormik/CheckoutFormik";

import { Home } from "../components/pages/home/Home";
import ItemDetailContainer from "../components/pages/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/pages/itemListContainer/ItemListContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: Cart,
  },
  {
    id: "detail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "h1",
    path: "/home",
    Element: Home,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutFormik,
  },
];
