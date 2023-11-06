import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();

  return (
    <Link style={{ color: "white" }} to="/cart">
      <Badge badgeContent={total} color="secondary" showZero>
        <ShoppingCartIcon color="inherit" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
