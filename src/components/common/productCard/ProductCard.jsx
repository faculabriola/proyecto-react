import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCart = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 170 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.img}
        title={`Imagen ${item.title}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.model}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${item.id}`}>
          <Button variant="contained" color="secondary" size="small">
            Ver detalles
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCart;
