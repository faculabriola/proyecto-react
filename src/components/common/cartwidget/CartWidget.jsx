import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link style={{ color: "white" }} to="/cart">
      <Badge badgeContent={0} color="secondary" showZero>
        <ShoppingCartIcon color="inherit" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
