import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductCart = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
          {item.description}
          <Typography variant="body2" color="text.secondary">
            ${item.price}
          </Typography>
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="secondary" size="small">
          Ver detalles
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCart;