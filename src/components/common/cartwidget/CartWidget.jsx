import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <Badge badgeContent={4} color="secondary">
      <ShoppingCartIcon color="inherit" />
    </Badge>
  );
};

export default CartWidget;
