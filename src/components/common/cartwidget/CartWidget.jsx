import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <Badge badgeContent={0} color="secondary" showZero>
      <ShoppingCartIcon color="inherit" />
    </Badge>
  );
};

export default CartWidget;
